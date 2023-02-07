document.getElementById("submitBtn").addEventListener("click", function() {

  var score = document.getElementById("score").value;

  if (isNaN(score) || score === "" || score > 100 || score < 0) {

    alert("Please enter a valid NTA Score between 0 to 100.");

    return;

  }

  var rank = 822000 - (822000*score) / 100;

  var deviation = Math.min(2000, Math.max(50, rank/50));

  var rankRangeLow = Math.max(rank - deviation, 1);

  var rankRangeHigh = rank + deviation;

  var rankRange = Math.round(rankRangeLow) + " - " + Math.round(rankRangeHigh);

  document.getElementById("outputContainer").innerHTML = "Rank Range: " + rankRange;

});



