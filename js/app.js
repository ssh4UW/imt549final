//Reference to ID Main, aka window for cards
var main = document.getElementById("main");

//Render a nested grid for the display cards
function renderNestedGrid() {
  var nestedGrid = document.createElement("div");
  nestedGrid.classList.add("mdl-grid");
  nestedGrid.classList.add("mdl-grid--nesting");
  nestedGrid.setAttribute("id", "display-window");
  main.appendChild(nestedGrid);
}
//render a cell for each clothing item
function renderCell(clothes) {
  for (var idx = 0; idx < clothes.length; idx++) {
    var cell = document.createElement("div");
    var window = document.getElementById("display-window");
    cell.classList.add("mdl-cell");
    cell.classList.add("mdl-cell--12-col-tablet");
    cell.classList.add("mdl-cell--6-col-desktop");

    //cell.setAttribute("id", "card-container");
    window.appendChild(cell);
    renderCard(clothes[idx], cell);
  }
}

//render one card for a piece of clothing
function renderCard(item, cell) {
  //   var test = document.createElement("div");
  //   test.classList.add("demo-card-square");
  //   test.classList.add("mdl-card");
  var outerCard = document.createElement("div");
  outerCard.classList.add("demo-card-square");
  outerCard.classList.add("mdl-card");
  outerCard.classList.add("card");
  //cell.appendChild(outerCard);
  //create card div using mdl and css style
  var card = document.createElement("div");
  card.classList.add("mdl-card_title");
  card.classList.add("mdl-card--expand");
  //   card.classList.add("card");
  card.style.backgroundImage = "url(images/" + item.image.url;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  //card title banner
  var h2 = document.createElement("h2");
  h2.textContent = item.title.toUpperCase();
  h2.classList.add("mdl-card__title-text");
  //item description
  var supportingText = document.createElement("div");
  supportingText.textContent = item.description;

  supportingText.classList.add("mdl-card__supporting-text");
  supportingText.classList.add("description");
  //item price
  var price = document.createElement("div");
  //price.classList.add("price");
  price.classList.add("card-details");
  price.classList.add("detail");
  price.textContent = "Price: $" + item.price;
  //item tags
  var tags = document.createElement("p");
  tags.classList.add("card-details");
  tags.classList.add("tags");
  tags.textContent = "tags: " + item.tags.join(", ");

  card.appendChild(h2);
  outerCard.appendChild(card);
  outerCard.appendChild(supportingText);
  outerCard.appendChild(price);
  outerCard.appendChild(tags);
  cell.appendChild(outerCard);
  //   //.appendChild(img)
  //   //card.insertAdjacentElement("afterend", supportingText);
  //   //test.appendChild(card);
  //   //card.appendChild(supportingText);
  //   //card.appendChild(price);
  //   //card.appendChild(tags);
  //   cell.appendChild(card);
  //   cell
  //     .appendChild(supportingText)
  //     .insertAdjacentElement("afterend", price)
  //     .insertAdjacentElement("afterend", tags);
}
renderNestedGrid();
renderCell(clothes);
