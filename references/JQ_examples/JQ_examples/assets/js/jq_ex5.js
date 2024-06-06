<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <title>Product Calculator</title>
</head>
<body>

<div class="container mt-5">
  <div id="product-container">
    <!-- Initial row -->
    <div class="row mb-2 product-row">
      <div class="col">
        <label for="product-name">Product Name</label>
        <input type="text" class="form-control" id="product-name">
      </div>
      <div class="col">
        <label for="quantity">Quantity</label>
        <input type="number" class="form-control quantity" id="quantity">
      </div>
      <div class="col">
        <label for="price">Price</label>
        <input type="number" class="form-control price" id="price">
      </div>
      <div class="col">
        <label>Total</label>
        <input type="text" class="form-control total" readonly>
      </div>
      <div class="col">
        <button class="btn btn-primary calculate-btn">Calculate</button>
      </div>
    </div>
  </div>

  <!-- Buttons -->
  <div class="row mt-3">
    <div class="col">
      <button class="btn btn-success add-more-btn">Add More</button>
      <button class="btn btn-info show-total-btn">Show Total</button>
    </div>
  </div>

  <!-- Grand Total -->
  <div class="row mt-3">
    <div class="col">
      <label for="grand-total">Grand Total:</label>
      <input type="text" class="form-control" id="grand-total" readonly>
    </div>
  </div>
</div>

<script>
  $(document).ready(function () {
    // Add More button click
    $(".add-more-btn").click(function () {
      var newRow = document.createElement('div');
      newRow.setAttribute('class', 'row mb-2 product-row');

      var col1 = document.createElement('div');
      col1.setAttribute('class', 'col');
      var input1 = document.createElement('input');
      input1.setAttribute('type', 'text');
      input1.setAttribute('class', 'form-control');
      input1.setAttribute('id', 'product-name');
      col1.appendChild(input1);

      var col2 = document.createElement('div');
      col2.setAttribute('class', 'col');
      var input2 = document.createElement('input');
      input2.setAttribute('type', 'number');
      input2.setAttribute('class', 'form-control quantity');
      input2.setAttribute('id', 'quantity');
      col2.appendChild(input2);

      var col3 = document.createElement('div');
      col3.setAttribute('class', 'col');
      var input3 = document.createElement('input');
      input3.setAttribute('type', 'number');
      input3.setAttribute('class', 'form-control price');
      input3.setAttribute('id', 'price');
      col3.appendChild(input3);

      var col4 = document.createElement('div');
      col4.setAttribute('class', 'col');
      var input4 = document.createElement('input');
      input4.setAttribute('type', 'text');
      input4.setAttribute('class', 'form-control total');
      input4.setAttribute('readonly', 'readonly');
      col4.appendChild(input4);

      var col5 = document.createElement('div');
      col5.setAttribute('class', 'col');
      var button = document.createElement('button');
      button.setAttribute('class', 'btn btn-primary calculate-btn');
      button.innerHTML = 'Calculate';
      col5.appendChild(button);

      newRow.appendChild(col1);
      newRow.appendChild(col2);
      newRow.appendChild(col3);
      newRow.appendChild(col4);
      newRow.appendChild(col5);

      $("#product-container").append(newRow);
    });

    // Calculate button click
    $("#product-container").on("click", ".calculate-btn", function () {
      var row = $(this).closest(".product-row");
      var quantity = parseInt(row.find(".quantity").val()) || 0;
      var price = parseFloat(row.find(".price").val()) || 0;
      var total = quantity * price;

      row.find(".total").val(total.toFixed(2));
    });

    // Show Total button click
    $(".show-total-btn").click(function () {
      var grandTotal = 0;
      $(".total").each(function () {
        grandTotal += parseFloat($(this).val()) || 0;
      });

      $("#grand-total").val(grandTotal.toFixed(2));
    });
  });
</script>

</body>
</html>
