function invertPyramid(N) {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (c >= r) {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
}


// when N = 5
invertPyramid(5)