$(document).ready(function() {
  $("form#fortune_teller").submit(function(event) {
    event.preventDefault();
    $("#bad-luck").show();
    $("input:checkbox[name=bad-luck]:checked").each(function() {
      var badLuckCounter = $(this).val();
      $('#bad-luck').append(badLuckCounter + "<br>");
    });
    $("#good-luck").show();
    $("input:checkbox[name=good-luck]:checked").each(function() {
      var goodLuckCounter = $(this).val();
      $('#good-luck').append(goodLuckCounter + "<br>");
    });

    if (badLuckCounter < goodLuckCounter) {
      (".result" = "#good-luck")
    } else if (goodLuckCounter < badLuckCounter) {
      (".result" = "#bad-luck")
    } else {
      (".result" = "#meh-luck")
    }
    $('#fortune_teller').hide();
  });
});