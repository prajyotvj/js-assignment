// Operation 1: display the date in selected format
function current_Date() {
  const format_Selected = document.querySelector(
    'input[name="date_format"]:checked'
  ).value;

  const current_Date = new Date();
  var day = current_Date.getDate();
  var month = current_Date.getMonth() + 1;
  var year = current_Date.getFullYear();
  let date_Format;

  switch (format_Selected) {
    case "mm-dd-yyyy":
      date_Format = month + "-" + day + "-" + year;
      break;

    case "mm/dd/yyyy":
      date_Format = month + "/" + day + "/" + year;
      break;

    case "dd-mm-yyyy":
      date_Format = day + "-" + month + "-" + year;
      break;

    case "dd/mm/yyyy":
      date_Format = day + "/" + month + "/" + year;
      break;
  }

  document.getElementById("sel_format").innerText =
    "Current Date: " + date_Format;
}

// Operation 2: select the country and city and then display the selected city
window.onload = function () {
  document.getElementById("usa_cities").style.display = "none";
  document.getElementById("usa_cities_Lbl").style.display = "none";
  document.getElementById("aus_cities").style.display = "none";
  document.getElementById("aus_cities_Lbl").style.display = "none";
};

function show_section(sel_option) {
  if (sel_option == "india") {
    document.getElementById("india_cities").style.display = "block";
    document.getElementById("india_cities_Lbl").style.display = "block";
    document.getElementById("usa_cities").style.display = "none";
    document.getElementById("usa_cities_Lbl").style.display = "none";
    document.getElementById("aus_cities").style.display = "none";
    document.getElementById("aus_cities_Lbl").style.display = "none";
  } else if (sel_option == "usa") {
    document.getElementById("india_cities").style.display = "none";
    document.getElementById("india_cities_Lbl").style.display = "none";
    document.getElementById("usa_cities").style.display = "block";
    document.getElementById("usa_cities_Lbl").style.display = "block";
    document.getElementById("aus_cities").style.display = "none";
    document.getElementById("aus_cities_Lbl").style.display = "none";
  } else {
    document.getElementById("india_cities").style.display = "none";
    document.getElementById("india_cities_Lbl").style.display = "none";
    document.getElementById("usa_cities").style.display = "none";
    document.getElementById("usa_cities_Lbl").style.display = "none";
    document.getElementById("aus_cities").style.display = "block";
    document.getElementById("aus_cities_Lbl").style.display = "block";
  }
}

function selected_city(selected_city) {
  document.getElementById("display_city").innerHTML =
    "Selected City:  " + selected_city;
}

// Operation 3: display the count of color selected
function color_count() {
  var checkboxes = document.querySelectorAll('input[name="color"]:checked');
  var count = checkboxes.length;

  if (count === 0) {
    document.getElementById("display_count").innerHTML = "No color selected.";
  } else if (count === 1) {
    document.getElementById("display_count").innerHTML =
      "Number of color selected: " + count;
  } else if (count === 2) {
    document.getElementById("display_count").innerHTML =
      "Number of color selected: " + count;
  } else if (count === 3) {
    document.getElementById("display_count").innerHTML =
      "Number of color selected: " + count;
  } else if (count === 4) {
    document.getElementById("display_count").innerHTML =
      "Number of color selected: " + count;
  }
}

// Operation 4: delete the state and its capital
function delete_row(btn) {
  var row = btn;
  var state = row.cells[0].textContent;
  var confirmation = confirm("Do you really want to delete the selected row?");

  if (confirmation) {
    row.remove();
  }
}
