let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
})

var leaderboard = [];

function addToLeaderboard() {
  var name = document.getElementById("fname").value;
  var score = document.getElementById("score").value;
  leaderboard.push({ name: name, score: score });
  leaderboard.sort(function(a, b) {
    return b.score - a.score;
  });
  updateLeaderboard();
}

function updateLeaderboard() {
  var leaderboardBody = document.getElementById("leaderboard-body");
  leaderboardBody.innerHTML = "";
  for (var i = 0; i < leaderboard.length; i++) {
    var leader = leaderboard[i];
    var row = document.createElement("tr");
    var rankCell = document.createElement("td");
    rankCell.innerHTML = i + 1;
    row.appendChild(rankCell);
    var nameCell = document.createElement("td");
    nameCell.innerHTML = leader.name;
    row.appendChild(nameCell);
    var scoreCell = document.createElement("td");
    scoreCell.innerHTML = leader.score;
    row.appendChild(scoreCell);
    leaderboardBody.appendChild(row);
  }
}



function export_data(){
    let data = document.getElementById('show');
    var fp=XLSX.utils.table_to_book(data,{sheet:'sheet1'});
    XLSX.write(fp,{
        bookType:'xlsx',
        type:'base64'
    });
    XLSX.writeFile(fp, 'score_card.xlsx');
}

