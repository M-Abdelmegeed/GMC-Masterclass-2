var add1 = document.getElementById("add-1");
var price1 = document.getElementById("price-1");
var totalPrice = document.getElementById("total-price");
var noOfItems = document.getElementById("no-of-items");

console.log(Number(price1.innerText.split(" ")[1].split("$")[0]) + 0.01);

add1.addEventListener("click", () => {
  var price = Number(price1.innerText.split(" ")[1].split("$")[0]);
  var total = Number(totalPrice.innerText.split(" ")[1]);
  var items = Number(noOfItems.innerText.split(" ")[1]);
  totalPrice.innerText = `Price: ${price + total}`;
  noOfItems.innerText = `Items: ${items + 1}`;
  alert("Item added to cart successfully!");
});

var tankTops = [
  { team: "Bucks Tank '23", price: 100, image: "Bucks.png" },
  { team: "Celtics Tank '23", price: 120, image: "Celtics.png" },
  { team: "Bulls Tank '23", price: 150, image: "Bulls.png" },
  { team: "Lakers Tank '23", price: 130, image: "Lakers.png" },
];

var container = document.getElementById("grid-container");
// console.log(container.innerHTML);
container.innerHTML =
  container.innerHTML +
  tankTops
    .map(
      (tank) =>
        `<div class="grid-item">
        <img src=${tank.image} />
        <div>${tank.team}</div>
        <div id="price-1">Price: ${tank.price}$</div>
        <div>
          <button id="add-1">Add to Cart</button>
          <button style="background-color: red" id="remove-1">
            Remove from Cart
          </button>
        </div>
      </div>`
    )
    .join("");
