function printRectangle(N) {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      process.stdout.write("*\t");
    }
    process.stdout.write("\n");
  }
}

// when N = 5

printRectangle(5);
