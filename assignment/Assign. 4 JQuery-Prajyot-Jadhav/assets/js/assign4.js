$(document).ready(function () {
  $(".add-more_btn").click(function () {
    var newRow = document.createElement("div");
    newRow.setAttribute("class", "row mb-2 product_row");

    //product div creation
    var product_Div = document.createElement("div");
    product_Div.setAttribute("class", "col-md-3");
    var product_lbl = document.createElement("label");
    product_lbl.setAttribute("for", "product_name");
    product_lbl.textContent = "Product Name:";
    var prod_input = document.createElement("input");
    prod_input.setAttribute("type", "text");
    prod_input.setAttribute("class", "form-control");
    prod_input.setAttribute("id", "product_name");
    product_Div.appendChild(product_lbl);
    product_Div.appendChild(prod_input);

    //quantity div creation
    var quant_div = document.createElement("div");
    quant_div.setAttribute("class", "col-md-3");
    var quant_lbl = document.createElement("label");
    quant_lbl.setAttribute("for", "quantity");
    quant_lbl.textContent = "Quantity:";
    var quant_input = document.createElement("input");
    quant_input.setAttribute("type", "number");
    quant_input.setAttribute("class", "form-control quantity");
    quant_input.setAttribute("id", "quantity");
    quant_div.appendChild(quant_lbl);
    quant_div.appendChild(quant_input);

    //price div creation
    var price_div = document.createElement("div");
    price_div.setAttribute("class", "col-md-2");
    var price_lbl = document.createElement("label");
    price_lbl.setAttribute("for", "price");
    price_lbl.textContent = "Price:";
    var pirce_input = document.createElement("input");
    pirce_input.setAttribute("type", "number");
    pirce_input.setAttribute("class", "form-control price");
    pirce_input.setAttribute("id", "price");
    price_div.appendChild(price_lbl);
    price_div.appendChild(pirce_input);

    // calculate button creation
    var cal_btn_div = document.createElement("div");
    cal_btn_div.setAttribute("class", "col-md-2 mt-4");
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary calculate_btn");
    button.innerHTML = "Calculate";
    cal_btn_div.appendChild(button);

    // total for each row
    var total_div = document.createElement("div");
    total_div.setAttribute("class", "col-md-2");
    var total_lbl = document.createElement("label");
    total_lbl.setAttribute("for", "total");
    total_lbl.textContent = "Total";

    var total_input = document.createElement("input");
    total_input.setAttribute("type", "text");
    total_input.setAttribute("class", "form-control total");
    total_input.setAttribute("readonly", "readonly");
    total_div.appendChild(total_lbl);
    total_div.appendChild(total_input);

    newRow.appendChild(product_Div);
    newRow.appendChild(quant_div);
    newRow.appendChild(price_div);
    newRow.appendChild(cal_btn_div);
    newRow.appendChild(total_div);

    $("#product_container").append(newRow);
  });

  // Calculate button
  $("#product_container").on("click", ".calculate_btn", function () {
    var row = $(this).closest(".product_row");
    var quantity = parseInt(row.find(".quantity").val()) || 0;
    var price = parseFloat(row.find(".price").val()) || 0;
    var total = quantity * price;

    row.find(".total").val(total.toFixed(2));
  });

  // Show Total button
  $(".show-total_btn").click(function () {
    var grandTotal = 0;
    $(".total").each(function () {
      grandTotal = grandTotal + parseFloat($(this).val()) || 0;
    });
    document.getElementById("grand_total").innerHTML =
      "Grand Total: Rs " + grandTotal.toFixed(2);
  });
});
