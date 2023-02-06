document.getElementById("submitBtn").addEventListener("click", function() {
  var score = document.getElementById("score").value;
  if (isNaN(score) || score === "" || score > 100) {
    alert("Please enter a valid NTA Score less than or equal to 100.");
    return;
  }
  var rank = 822000 - (score / 100) * 822000;
  document.getElementById("outputContainer").innerHTML = "Rank: " + Math.round(rank);
});
