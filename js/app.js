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
  //var cell = document.getElementById("card-container").lastChild;
  var card = document.createElement("div");
  card.classList.add("mdl-card_title");
  card.classList.add("mdl-card--expand");
  card.classList.add("card");
  card.setAttribute("style", "background:url(images/" + item.image.url);
  //card.setAttribute("style", "background-size: auto");

  var h2 = document.createElement("h2");
  h2.textContent = item.title;
  h2.classList.add("mdl-card__title-text");
  //   var img = document.createElement("img");
  //   img.setAttribute("src", "images/" + item.image.url);
  //   img.setAttribute("alt", item.image.text);
  var supportingText = document.createElement("div");
  supportingText.textContent = item.description;
  supportingText.classList.add("mdl-card__supporting-text");

  card
    .appendChild(h2)
    //.appendChild(img)
    .insertAdjacentElement("afterend", supportingText);
  cell.appendChild(card);
}
renderNestedGrid();
renderCell(clothes);
