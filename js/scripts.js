$(document).ready(function () {
  $("#quiz").hide();
  $("#startButton").click(function () {
    $("#quiz").show();

    $("#buttonConfirm").click(function () {


      //
      var one = $("input:radio[name=oneOne]:checked").val();
      var oneTwo = $("input:radio[name=oneTwo]:checked").val();
      // if user checked yes, one === 1 and oneTwo === 0
      // if user checked no, one === 0 and oneTwo === -1

      var twoOne = $("input:radio[name=twoOne]:checked").val();
      var twoTwo = $("input:radio[name=twoTwo]:checked").val();
      var threeOne = $("input:radio[name=threeOne]:checked").val();
      var threeTwo = $("input:radio[name=threeTwo]:checked").val();
      var fourOne = $("input:radio[name=fourOne]:checked").val();
      var fourTwo = $("input:radio[name=fourTwo]:checked").val();
      var fiveOne = $("input:radio[name=fiveOne]:checked").val();
      var fiveTwo = $("input:radio[name=fiveTwo]:checked").val();
      var sixOne = $("input:radio[name=sixOne]:checked").val();
      var sixTwo = $("input:radio[name=sixTwo]:checked").val();
      var sevenOne = $("input:radio[name=sevenOne]:checked").val();
      var sevenTwo = $("input:radio[name=sevenTwo]:checked").val();


      var total = one + oneTwo + twoOne + twoTwo + threeOne + threeTwo + fourOne + fourTwo + fiveOne + fiveTwo + sixOne + sixTwo + sevenOne + sevenTwo;

      alert(total);

    });

  });

});