N = 6;
function leftTriangle(L) {
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`${Math.floor("1")}`);
    }
    process.stdout.write("\n");
  }
}

function rightTriangle(L) {
  for (let i = L; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function reflectTriangle(L) {
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  for (let i = L - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function printPyramid(L) {
  for (let i = 0; i <= L; i++) {
    for (let j = 0; j < L - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < L - i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

function reversedPyramid(L) {
  for (let i = L; i > 0; i--) {
    for (let j = 0; j < L - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < L - i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

function reflectPyramid(L) {
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < L - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < L - i - 1; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
  for (let i = L; i > 0; i--) {
    for (let j = 0; j < L - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < L - i; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

leftTriangle(N);
process.stdout.write((4).toString(2))
