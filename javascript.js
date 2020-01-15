$(document).ready(function () {

  // $('.buttons').click(function () {
  //   if ($('.active').length) {
  //     $('.active').not($(this)).removeClass('active').addClass('buttons');
  //   }
  //   $(this).removeClass('buttons').addClass('active');
  //   console.log("Button " + (this).id + " Is Now Active!")



  $("#form-one").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var comment = $("#comment").val();

    if (name == "" || comment == "") {
      $("#error_message").show().html("All Fields are Required");
    } else {
      $("#error_message").html("").hide();
      $.ajax({
        type: "POST",
        url: "post-form.php",
        data: "name=" + name + "&last-name=" + last - name + "&phone=" + phone + "&email=" + email,
        success: function (data) {
          $('#success_message').fadeIn().html(data);
          setTimeout(function () {
            $('#success_message').fadeOut("slow");
          }, 2000);

        }
      });
    }
  })
});