// at the start image div is kept hidden
document.getElementById("pizza_image").style.display = "none";

//display the pizza after selection of catogery
function Display_pizzas() {
  var select_catogery = document.getElementById("select_catogery");
  var select_pizza = document.getElementById("select_pizza");
  var pizza_image = document.getElementById("pizza_image");
  var pizza_price = document.getElementById("pizza_price");

  select_pizza.innerHTML = "";
  pizza_image.src = "";
  pizza_price.value = "";

  var selectedCategory = select_catogery.value;

  // pizza options based on the selected category
  var pizza_Options = [];
  if (selectedCategory === "veg") {
    pizza_Options = [
      "-- select the pizza (Veg) --",
      "Peppy Paneer",
      "Veggie Paradise",
      "Cheese N Corn",
    ];
  } else if (selectedCategory === "nonveg") {
    pizza_Options = [
      "-- select the pizza (Non-Veg) --",
      "Chicken Golden Delight",
      "Indi Chicken Tikka",
      "CHICKEN SAUSAGE",
    ];
  }

  // display the pizza option in the drop down
  for (var i = 0; i < pizza_Options.length; i++) {
    var option = document.createElement("option");
    if (i == 0) {
      option.text = pizza_Options[i];
      option.value = "";
      option.setAttribute("disabled", true);
      option.setAttribute("selected", true);
      select_pizza.add(option);
    } else {
      option.text = pizza_Options[i];
      select_pizza.add(option);
    }
  }
}

// function to update pizza image and price based on the selected pizza
function update_Pizza() {
  var select_pizza = document.getElementById("select_pizza");
  var pizza_image = document.getElementById("pizza_image");
  var pizza_price = document.getElementById("pizza_price");

  var selectedPizza = select_pizza.value;

  // pizza image and price of the selected pizza
  switch (selectedPizza) {
    case "Peppy Paneer":
      document.getElementById("pizza_image").style.display = "block";
      pizza_image.src = "assets/images/Peppy_Paneer.jpg";
      pizza_price.value = "100";
      document.getElementById("pizza_image").src =
        "assets/images/Peppy_Paneer.jpg";
      break;
    case "Veggie Paradise":
      document.getElementById("pizza_image").style.display = "block";
      pizza_image.src = "assets/images/Digital_Veggie_Paradise.jpg";
      pizza_price.value = "200";
      break;
    case "Cheese N Corn":
      document.getElementById("pizza_image").style.display = "block";
      pizza_image.src = "assets/images/Corn-Cheese.jpg";
      pizza_price.value = "250";
      break;
    case "Chicken Golden Delight":
      document.getElementById("pizza_image").style.display = "block";
      pizza_image.src = "assets/images/chicken-golden-delight.jpeg";
      pizza_price.value = "340";
      break;
    case "Indi Chicken Tikka":
      document.getElementById("pizza_image").style.display = "block";
      pizza_image.src = "assets/images/indi-chicken-tikka.jpg";
      pizza_price.value = "400";
      break;
    case "CHICKEN SAUSAGE":
      document.getElementById("pizza_image").style.display = "block";
      pizza_image.src = "assets/images/chicken-sausage2.png";
      pizza_price.value = "550";
      break;
  }
}

//to the change event of the select_pizza dropdown
document
  .getElementById("select_pizza")
  .addEventListener("change", update_Pizza);

// side order section
function display_Selection() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const checkboxes = document.getElementsByName("side_order");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const value = checkbox.value;
      const imageSrc = get_image_src(value);
      const price = get_price(value);

      // creating the element for the side order items
      const innerDiv = document.createElement("div");
      innerDiv.id = "innerdiv";
      innerDiv.setAttribute(
        "class",
        "mt-2 border border-1 border-primary rounded"
      );
      const quant_input = document.createElement("input");
      quant_input.setAttribute("class", "mx-5 rounded");
      quant_input.setAttribute("style", "border:1px solid #0275d8");
      quant_input.placeholder = "  --Enter the quantity--  ";
      quant_input.type = "number";
      quant_input.id = "quantity_" + value;
      quant_input.addEventListener("input", Side_Order_Total);
      const price_tag = document.createElement("label");
      price_tag.setAttribute("style", "color:green");
      price_tag.textContent = "Price: " + price + " Rs only";
      const img = document.createElement("img");
      img.setAttribute("style", "margin-right: 50px;");
      img.src = imageSrc;
      img.alt = value;
      img.style.maxWidth = "150px";
      img.style.maxHeight = "150px";

      innerDiv.appendChild(img);
      innerDiv.appendChild(price_tag);
      innerDiv.appendChild(quant_input);

      resultDiv.appendChild(innerDiv);
    }
  });
}
// function to return the source of the side order item selected
function get_image_src(side_order) {
  const image_Map = {
    Breads: "assets/images/garlic-bread.jpeg",
    Dips: "assets/images/dips.jpeg",
    Dessert: "assets/images/desert.jpeg",
  };
  return image_Map[side_order];
}

// function to return the price of the side order item selected
function get_price(side_order) {
  const price_Map = {
    Breads: 99,
    Dips: 79,
    Dessert: 89,
  };
  return price_Map[side_order];
}

// funtion to calculate the total amt of the side order
function Side_Order_Total() {
  const checkboxes = document.getElementsByName("side_order");
  let totalPrice = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const value = checkbox.value;
      const quantityInput = document.getElementById("quantity_" + value);
      const quantity = parseInt(quantityInput.value, 10) || 0;
      const price = get_price(value);
      totalPrice = totalPrice + quantity * price;
    }
  });

  const total_side_order = document.getElementById("side_order_total");
  total_side_order.value = totalPrice;
}

// function to calculate the total final order amount
function calculate_Total() {
  var side_order_amt = document.getElementById("side_order_total").value;
  var pizza_price = document.getElementById("pizza_price").value;
  var pizza_quantity = document.getElementById("pizza_quantity").value;

  var total_pizza = pizza_price * pizza_quantity;

  var total_pizza_amt = parseFloat(total_pizza) || 0;
  var total_side_order_amt = parseFloat(side_order_amt) || 0;

  const total_order_amt = total_pizza_amt + total_side_order_amt;

  const total_order_input = document.getElementById("totalAmount");
  total_order_input.textContent = "Total Order Amount (Rs): " + total_order_amt;
  document.getElementById("thankYou").textContent = "Thankyou, Visit again....";
}

// Validations

$(document).ready(function () {
  var pizzaForm = $("#pizzafrm");
  pizzaForm.validate({
    rules: {
      select_catogery: {
        required: true,
      },
      select_pizza: {
        required: true,
      },
      pizza_quantity: {
        required: true,
        min: 1,
      },
    },
    // messages
    messages: {
      select_catogery: {
        required: "Please select a category",
      },
      select_pizza: {
        required: "Please select a pizza",
      },
      pizza_quantity: {
        required: "Please enter a quantity",
        min: "Quantity must be at least 1",
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element).addClass("text-danger");
    },
  });

  // this validation is use to display error when we try to select directly the pizza without selecting the catogoery
  var selectcatogery = $("#select_catogery");
  selectcatogery.validate({
    rules: {
      select_catogery: {
        required: true,
      },
      select_pizza: {
        required: true,
      },
    },
    messages: {
      select_catogery: {
        required: "Please select a category",
      },
      select_pizza: {
        required: "Please select a pizza",
      },
    },
  });

  //validation on pizza select click
  $("#select_pizza").on("click", function () {
    selectcatogery.valid();
  });

  //validation on quantity input
  $("#pizza_quantity").on("focus", function () {
    pizzaForm.valid();
  });

  //Calculate button click
  $("#calculate_button").on("click", function () {
    if (pizzaForm.valid()) {
      calculate_Total();
    }
  });
});
