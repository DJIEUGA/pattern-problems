function starPyramid(N) {
  for (let r = 1; r <= N; r++) {
    // print the spaces before the stars
    for (let c = 1; c <= N-r; c++) {
        process.stdout.write(" ");
    }
    // print the stars
    for (let c = 1; c <= 2*r - 1; c++) {
        process.stdout.write("*");
    }
    // print the spaces after the stars
    for (let c = 1; c <= N-r; c++) {
        process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

starPyramid(5);
