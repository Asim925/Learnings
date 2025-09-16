function diamond(rows) {
  let halfRows = Math.ceil(rows / 2);

  for (let i = 1; i <= halfRows; i++) {
    let row = "$";
    for (let j = 1; j < i; j++) row += "$$";

    for (let space = halfRows - i; space > 0; space--) row = " " + row;

    console.log(row);
  }

  for (let i = rows % 2 === 0 ? halfRows : halfRows - 1; i >= 1; i--) {
    let row = "$";
    for (let j = i; j > 1; j--) row += "$$";

    for (let space = 0; space < halfRows - i; space++) row = " " + row;

    console.log(row);
  }
}

diamond(-63);

//   #
//  ###
// #####
//  ###
//   #
