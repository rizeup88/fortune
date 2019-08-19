$(document).ready(function() {
  $("form#fortune_teller").submit(function(event) {
    event.preventDefault();

    var badLuckCounter = 0;
    var goodLuckCounter = 0;

    $("input:checkbox[name=bad-luck]:checked").each(function() {
      badLuckCounter = (badLuckCounter + 1)
    });
    $("input:checkbox[name=good-luck]:checked").each(function() {
      goodLuckCounter = (goodLuckCounter + 1)
    });

    if (badLuckCounter < goodLuckCounter) {
      $("#good-luck").show()
    } else if (goodLuckCounter < badLuckCounter) {
      $("#bad-luck").show()
    } else if (goodLuckCounter === badLuckCounter) {
      $("#meh-luck").show()
    }
    $('#fortune_teller').hide();
  });
});