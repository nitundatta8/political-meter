$(document).ready(function () {
  $("#quiz").hide();
  $("#startButton").click(function (event) {
    
    $("#quiz").show();

    $("#btnConfirm").click(function () {

      var yesCount = 0;

      var inputOne = $("input:radio[name=oneOne]:checked").val()
      console.log(inputOne);
      if(inputOne === "1")yesCount++;
      console.log("-->"+yesCount); 

      var inputTwo = $("input:radio[name=twoOne]:checked").val()
      if(inputTwo === "1")yesCount++;
      console.log("-->"+yesCount);

      var inputThree = $("input:radio[name=threeOne]:checked").val()
      if(inputThree === "1")yesCount++;
      console.log("-->"+yesCount);
      
      var inputFour = $("input:radio[name=fourOne]:checked").val()
      if(inputFour === "1")yesCount++;
      console.log("-->"+yesCount);
      
      var inputFive = $("input:radio[name=fiveOne]:checked").val()
      if(inputFive === "1")yesCount++;
      console.log("-->"+yesCount);
      
      var inputSix = $("input:radio[name=sixOne]:checked").val()
      if(inputSix === "1")yesCount++;
      console.log("-->"+yesCount);
      
      var inputSeven = $("input:radio[name=sevenOne]:checked").val()
      if(inputSeven === "1")yesCount++;

      console.log(yesCount);
      if(yesCount <4){
        alert("Conservative")
      }
      else{
        alert("Liberal")
      }
      
      event.preventDefault();
    });

  });

});