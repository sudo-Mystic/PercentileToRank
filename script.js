document.getElementById("submitBtn").addEventListener("click", function() {

  var score = document.getElementById("score").value;

  if (isNaN(score) || score === "" || score > 100) {

    alert("Please enter a valid NTA Score less than or equal to 100.");

    return;

  }

  var rank = 822000 - (822000*score) / 100;

  var deviation = Math.min(20000, Math.max(2000, rank/50));

  var rankRangeLow = rank - deviation;

  var rankRangeHigh = rank + deviation;

  var rankRange = Math.round(rankRangeLow) + " - " + Math.round(rankRangeHigh);

  document.getElementById("outputContainer").innerHTML = "Rank Range: " + rankRange;

});



