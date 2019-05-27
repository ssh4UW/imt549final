//Store schedule
var storeSchedule = [
  { day: "Monday", hours: "10am-6pm" },
  { day: "Tuesday", hours: "10am-6pm" },
  { day: "Wednesday", hours: "10am-6pm" },
  { day: "Thursday", hours: "10am-6pm" },
  { day: "Friday", hours: "10am-11pm" },
  { day: "Saturday", hours: "10am-11pm" },
  { day: "Sunday", hours: "12am-5pm" }
];
//Create Array of tags

// References
// buttons
var womenButton = document.querySelector(".women");
var menButton = document.querySelector(".men");
var home = document.querySelector(".home");
var hamburger = document.querySelector("#hamburger");
var womenLink = document.querySelector("#womenLink");
var menLink = document.querySelector("#menLink");
var homeLink = document.querySelector("#homeLink");
// main content section
var content = document.querySelector(".content");

//Fuctions

function deactivateButton(button) {
  if (button.value == "women") {
    button1 = menButton;
    button2 = home;
    active = womenButton;
  } else if (button.value == "men") {
    button1 = womenButton;
    button2 = home;
    active = menButton;
  } else {
    button1 = womenButton;
    button2 = menButton;
    active = home;
  }
  button1.classList.remove("active");
  button2.classList.remove("active");
  active.classList.add("active");
}
function onClick() {
  deactivateButton(this);
  clearDisplayWindow();
  renderLocalNav(this.value);
  renderMainCell();
  renderCell(filterTags(this.value));
}

function renderMainCell() {
  //Function creates the main cell for displaying content.  "Main" doesn't include local navigation.  Child of div id=content
  var main = document.createElement("div");
  main.classList.add(
    "mdl-cell",
    "mdl-cell--10-col-desktop",
    "mdl-cell--12-col-tablet"
  );
  main.setAttribute("id", "main");
  content.appendChild(main);
  main.appendChild(renderNestedGrid());
}

function renderNestedGrid() {
  //Render a nested grid for the display cards
  var nestedGrid = document.createElement("div");
  nestedGrid.classList.add("mdl-grid");
  nestedGrid.classList.add("mdl-grid--nesting");
  nestedGrid.setAttribute("id", "display-window");
  return nestedGrid;
}

function renderCell(clothes) {
  //render a cell for each clothing item
  for (var idx = 0; idx < clothes.length; idx++) {
    var cell = document.createElement("div");
    var window = document.getElementById("display-window");
    cell.classList.add("mdl-cell");
    cell.classList.add("mdl-cell--8-col-tablet");
    cell.classList.add("mdl-cell--4-col-desktop");
    window.appendChild(cell);
    renderCard(clothes[idx], cell);
  }
}

function renderCard(item, cell) {
  //render one card for a piece of clothing
  //Create outer div
  var outerCard = document.createElement("div");

  outerCard.classList.add("mdl-card");
  outerCard.classList.add("card");

  //Create div to hold information
  var card = document.createElement("div");
  card.classList.add("mdl-card_title");
  card.classList.add("mdl-card--expand");
  card.style.backgroundImage = "url(images/" + item.image.url;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";

  //card title banner
  var h2 = document.createElement("h2");
  h2.textContent = item.title.toUpperCase();
  h2.classList.add("mdl-card__title-text");
  h2.classList.add("card-title");

  //item description and price
  var supportingText = document.createElement("div");
  supportingText.textContent = item.description;
  supportingText.classList.add("mdl-card__supporting-text");
  supportingText.classList.add("description");
  var price = document.createElement("div");
  price.classList.add("card-details", "detail");
  price.textContent = "Price: $" + item.price;

  card.appendChild(h2);
  outerCard.appendChild(card);
  outerCard.appendChild(supportingText);
  outerCard.appendChild(price);

  cell.appendChild(outerCard);
}

function filterTags(filter) {
  var filteredArray = [];
  for (var i = 0; i < clothes.length; i++) {
    for (var j = 0; j < clothes[i].tags.length; j++) {
      if (clothes[i].tags[j] == filter) {
        filteredArray.push(clothes[i]);
      }
    }
  }
  return filteredArray;
}

function clearDisplayWindow() {
  var display = document.getElementById("display-window");
  content.textContent = "";
}

function renderLocalNav(value) {
  var localNav = document.createElement("div");
  localNav.classList.add(
    "mdl-cell",
    "mdl-cell--2-col-desktop",
    "mdl-cell--12-col-tablet"
  );
  localNav.setAttribute("id", "local-nav");
  var para = document.createElement("div");
  para.classList.add("related");

  para.textContent = "Related tags: ";
  var list = document.createElement("div");
  list.classList.add("taglist");

  var tags = createArrayOfTags(filterTags(value));
  console.log(tags);
  console.log("test");
  for (var i = 0; i < tags.length; i++) {
    var tag = document.createElement("button");
    tag.setAttribute("value", tags[i]);
    tag.classList.add("tagitem");
    tag.innerHTML = tags[i];
    list.appendChild(tag);

    tag.addEventListener("click", onClick);
  }
  localNav.appendChild(para);
  localNav.appendChild(list);
  content.appendChild(localNav);
}

function createArrayOfTags(items) {
  var tags = [];
  for (var i = 0; i < items.length; i++) {
    for (var j = 0; j < items[i]["tags"].length; j++) {
      if (tags.indexOf(items[i]["tags"][j]) == -1) {
        tags.push(items[i]["tags"][j]);
      }
    }
  }
  return tags;
}

function renderTag(tag) {
  var tags = createArrayOfTags("");
}

function renderHome() {
  var home = document.createElement("div");
  home.classList.add(
    "mdl-cell",
    "mdl-cell--12-col-desktop",
    "mdl-cell--12-col-tablet"
  );
  home.setAttribute("id", "main");
  var nesting = document.createElement("div");
  nesting.classList.add("mdl-grid", "mdl-grid--nesting");

  var promo = document.createElement("div");
  promo.classList.add(
    "mdl-cell",
    "mdl-cell--8-col-desktop",
    "mdl-cell--12-col-tablet",
    "promo"
  );

  var img = document.createElement("img");
  img.setAttribute("src", "images/sale.jpg");
  promo.appendChild(img);
  var h2 = document.createElement("h2");
  h2.textContent = "Spring Sale";
  promo.appendChild(h2);
  var text = document.createElement("p");
  text.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non molestiae iure doloribus obcaecati perspiciatis sed. Delectu  facere iste dignissimos velit adipisci aliquam fuga illumnecessitatibus, ullam culpa rem nemo. Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Beatae officiis, nisi et explicabocorrupti suscipit? Perferendis, laborum dicta maiores eligendilaudantium earum quia eos voluptates et incidunt. Beatae, quasi maiores?";

  promo.appendChild(text);

  var column2 = document.createElement("div");
  column2.classList.add(
    "mdl-cell",
    "mdl-cell--4-col-desktop",
    "mdl-cell--12-col-tablet"
  );
  var img2 = document.createElement("img");
  img2.setAttribute("src", "images/home.jpg");

  var storeHours = document.createElement("h5");
  storeHours.textContent = "Store Hours:";

  var table = document.createElement("table");
  var mapContainer = document.createElement("div");

  mapContainer.setAttribute("id", "map");
  var map = document.createElement("div");
  map.setAttribute("id", "mapid");
  mapContainer.appendChild(map);

  column2.appendChild(img2);
  column2.appendChild(storeHours);
  column2.appendChild(renderStoreHours(storeSchedule));
  column2.appendChild(mapContainer);
  nesting.appendChild(promo);
  home.appendChild(nesting);
  content.appendChild(home);
  nesting.append(column2);
  renderMap();
}

//Create store hours table
function renderStoreHours(storeHours) {
  var h5 = document.createElement("h5");
  h5.textContent = "Store Hours:";

  var table = document.createElement("table");
  table.textContent = "";
  for (var idx = 0; idx < storeHours.length; idx++) {
    table.appendChild(renderDayRow(storeHours[idx]));
  }
  return table;
}

function renderDayRow(day) {
  var tr = document.createElement("tr");
  tr.appendChild(renderHourProp(day.day));
  tr.appendChild(renderHourProp(day.hours));
  return tr;
}

function renderHourProp(content) {
  var td = document.createElement("td");
  td.textContent = content;
  return td;
}

//Create Store location map
function renderMap() {
  var mymap = L.map("mapid").setView([47.601518, -122.334297], 15);
  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1IjoicGhlc3RlbiIsImEiOiJjanZ4M204OHIwMTBpNDRwODRnMmV2bjRwIn0.BNDdfHxLQpPNX8VjEoN2TQ"
    }
  ).addTo(mymap);
  var marker = L.marker([47.601518, -122.334297]).addTo(mymap);
  marker.bindPopup("Located in Pioneer Square").openPopup();
}
function returnHome() {
  deactivateButton(this);
  clearDisplayWindow();
  renderHome();
}

function localNavTags(filter) {
  var filterArray = filterTags(filter);
  var tagArray = [];
  for (var idx = 0; idx < filterArray.length; idx++) {
    for (var jdx = 0; jdx < filterArray[idx].tags.length; jdx++) {
      if (tagArray.length == 0) {
        tagArray.push(filterArray[idx].tags[jdx]);
      } else if (tagArray.indexOf(filterArray[idx].tags[jdx]) == -1) {
        tagArray.push(filterArray[idx].tags[jdx]);
      }
    }
  }
  console.log(tagArray);
}

function hamburgerClose() {
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.classList.add("closed");
  var drawer = document.getElementById("drawer");
  drawer.classList.remove("is-visible");
  drawer.setAttribute("aria-hidden", "true");
}

function hamburgerClick() {
  hamburgerClose();
  deactivateButton(this);
  clearDisplayWindow();
  renderLocalNav(this.value);
  renderMainCell();
  renderCell(filterTags(this.value));
}

//Event Listeners
womenButton.addEventListener("click", onClick);
menButton.addEventListener("click", onClick);
home.addEventListener("click", returnHome);
hamburger.addEventListener("click", function() {
  if (this.classList.contains("closed")) {
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.classList.remove("closed");
    var drawer = document.getElementById("drawer");
    drawer.classList.add("is-visible");
    drawer.setAttribute("aria-hidden", "false");
  } else hamburgerClose();
});

womenLink.addEventListener("click", hamburgerClick);
menLink.addEventListener("click", hamburgerClick);
homeLink.addEventListener("click", function() {
  hamburgerClose();
  returnHome();
});
renderHome();
