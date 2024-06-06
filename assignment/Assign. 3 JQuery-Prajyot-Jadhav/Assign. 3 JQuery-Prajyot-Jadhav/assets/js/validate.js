//form validation
$(document).ready(function (value, element) {
  //Custom validation for username
  $.validator.addMethod(
    "validateUsername",
    function (value, element) {
      return /^[a-zA-Z0-9]{3,20}$/.test(value);
    },
    "It can contain alphabets and numbers. space and special characters are not allowed."
  );
  //Custom validation for password
  $.validator.addMethod(
    "validatepassword",
    function (value, element) {
      return /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(value);
    },
    "It can contain alphabets, numbers and special characters, but space is not allowed."
  );
  //Custom validation for city of employment field
  $.validator.addMethod(
    "validatecityemploy",
    function (value, element) {
      return /^[a-zA-Z\s]+$/.test(value);
    },
    "Only alphabets and spaces are allowed"
  );

  // Validation
  $("#frm").validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 20,
        validateUsername: true,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 20,
        validatepassword: true,
      },
      employment: {
        required: true,
        minlength: 6,
        maxlength: 20,
        validatecityemploy: true,
      },
      webServer: {
        required: true,
      },
      radioButton: "required",
      checkboxButton: "required",
    },
    messages: {
      usernamename: "Please enter your name",
      password: {
        required: "Please enter your password",
        minlength: "Password must be 5 char long",
      },
      employment: {
        required: "Please enter the city",
      },
      webServer: {
        required: "Please choose the Server",
      },
      radioButton: {
        required: "Please specify your role",
      },
      checkboxButton: {
        required: "Please select at least one option",
      },
    },
    // displaying the error message to the required place
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(".radio_err");
      } else if (element.is("select")) {
        error.appendTo(".drop_err");
      } else if (element.is(":checkbox")) {
        error.appendTo(".check_err");
      } else {
        error.insertAfter(element);
      }
    },
    //Modal window popup
    submitHandler: function (form) {
      $("#disp_username").html($("#username").val());
      $("#disp_city").html($("#employment").val());
      $("#disp_server").html($("#webServer").find(":selected").text());
      $("#disp_role").html($("input:radio[name=radioButton]:checked").val());

      var checkboxes = $("input:checkbox[name=checkboxButton]:checked")
        .map(function () {
          return $(this).val();
        })
        .get()
        .join(", ");

      $("#disp_sign").html(checkboxes);

      $("#frmModal").modal("show");

      $("#frmModal").on("hide.bs.modal", function () {
        alert("Success,The form has been submitted successfully");
      });
    },
  });
});

// Reset the input field
$("#reset_btn").on("click", function () {
  $("#frm")[0].reset();
});
