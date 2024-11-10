function invertedNumberPyramid(N) {
  for (let r = 1; r <= N; r++) {

    for (let c = N; c > r; c--) {
      process.stdout.write(`${N-c+1}`);
    }
    process.stdout.write("\n");
  }
}

// when N = 5
invertedNumberPyramid(5);
