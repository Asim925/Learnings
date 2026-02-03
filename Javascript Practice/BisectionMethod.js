function f(x) {
  return 2 * x ** 3 - 2 * x - 5; //   2.x cube - 2x -5
}

function BisectionMethod(interval, iter) {
  let a = interval[0]; // start
  let b = interval[1]; // end
  let c = (a + b) / 2; // avg
  console.log(`\nAs given, Root of the function lies between ${a} & ${b}\n`);

  for (let i = 0; i < iter; i++) {
    console.log(`\n============== Iteration ${i + 1} ==============\n`);
    let funcA = parseFloat(f(a).toFixed(3));
    let funcB = parseFloat(f(b).toFixed(3));
    let funcC = parseFloat(f(c).toFixed(3));
    console.log(
      `So f(a) --->   f(${parseFloat(a.toFixed(3))}) = ${funcA}

So f(b) --->  f(${parseFloat(b.toFixed(3))}) = ${funcB}

The average value of a & b is ${parseFloat(c.toFixed(3))} || So f(c) --->  f(${parseFloat(c.toFixed(3))}) = ${funcC}\n`,
    );

    if (funcA * funcC < 0) {
      b = c;
      if (parseFloat(a.toFixed(3)) == parseFloat(b.toFixed(3))) {
        console.log(`The root of the funtion is ${parseFloat(a.toFixed(3))}\n`);
        break;
      }

      if (i == iter - 1)
        console.log(
          `Since [f(${parseFloat(a.toFixed(3))}) * f(${parseFloat(c.toFixed(3))}) < 0], Root of the function is nearly ~ ${parseFloat(c.toFixed(3))}\n`,
        );
      else
        console.log(
          `Since [f(${parseFloat(a.toFixed(3))}) * f(${parseFloat(c.toFixed(3))}) < 0], Root of the function lies betwen ${parseFloat(a.toFixed(3))} & ${parseFloat(c.toFixed(3))}\n`,
        );
      c = (a + b) / 2;
    } else {
      a = c;

      if (parseFloat(a.toFixed(3)) == parseFloat(b.toFixed(3))) {
        console.log(`The root of the funtion is ${parseFloat(a.toFixed(3))}\n`);
        break;
      }
      if (i == iter - 1)
        console.log(
          `Since [ f(${parseFloat(c.toFixed(3))}) * f(${parseFloat(b.toFixed(3))}) < 0 ], Root of the function is nearly ~ ${parseFloat(c.toFixed(3))}\n`,
        );
      else
        console.log(
          `Since [f(${parseFloat(a.toFixed(3))}) * f(${parseFloat(b.toFixed(3))}) < 0], Root of the function lies betwen ${parseFloat(a.toFixed(3))} & ${parseFloat(b.toFixed(3))}\n`,
        );
      c = (a + b) / 2;
    }
  }
}

BisectionMethod([1.5, 2.5], 20);
