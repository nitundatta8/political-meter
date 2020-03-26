$(document).ready(function () {
  $("#quiz").hide();
  $("#startButton").click(function () {
    $("#quiz").show();

    $("#btnConfirm").click(function () {


      //
      var one = $("input:radio[name=oneOne]:checked").val();
      var oneTwo = $("input:radio[name=oneTwo]:checked").val();
      // if user checked yes, one === 1 and oneTwo === 0
      // if user checked no, one === 0 and oneTwo === -1

      var twoOne = parseInt($("input:radio[name=twoOne]:checked").val());
      var twoTwo = parseInt($("input:radio[name=twoTwo]:checked").val());
      var threeOne = parseInt($("input:radio[name=threeOne]:checked").val());
      var threeTwo = parseInt($("input:radio[name=threeTwo]:checked").val());
      var fourOne = parseInt($("input:radio[name=fourOne]:checked").val());
      var fourTwo = parseInt($("input:radio[name=fourTwo]:checked").val());
      var fiveOne = parseInt($("input:radio[name=fiveOne]:checked").val());
      var fiveTwo = parseInt($("input:radio[name=fiveTwo]:checked").val());
      var sixOne = parseInt($("input:radio[name=sixOne]:checked").val());
      var sixTwo = parseInt($("input:radio[name=sixTwo]:checked").val());
      var sevenOne = parseInt($("input:radio[name=sevenOne]:checked").val());
      var sevenTwo = parseInt($("input:radio[name=sevenTwo]:checked").val());

      if

      var total = one + oneTwo + twoOne + twoTwo + threeOne + threeTwo + fourOne + fourTwo + fiveOne + fiveTwo + sixOne + sixTwo + sevenOne + sevenTwo;

      alert(total);
      event.preventDefault();
    });

  });

});