// [
//     '  *  ', 1
//     ' *** ', 3
//     '*****' 5
// ]

// [
//     '     *     ',  1
//     '    ***    ',  3
//     '   *****   ',  5
//     '  *******  ',  7
//     ' ********* ',  9
//     '***********'   11
// ]

function buildTower(tiers) {
  let starCount = 1;
  let tower = [];
  tower.push(["*"]);
  for (let i = 0; i < tiers - 1; i++) {
    starCount = starCount + 2;
    let x = ["*"];
    for (j = 0; j < starCount - 1; j++) {
      x.push("*");
    }
    tower.push(x);
  }

  for (let i = 0; i < tiers; i++) {
    let spaceCount = (starCount - tower[i].length) / 2;
    for (let j = 0; j < spaceCount; j++) {
      tower[i].push(" ");
      tower[i].unshift(" ");
    }
    console.log(tower[i].join(""));
  }
}

buildTower(6);
