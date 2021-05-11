function crateDashBoard(n) {
  dash = Array(n);
  for (let i = 0; i < n; i++) {
    dash[i] = Array(n);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dash[i][j] = ".";
    }
  }
  console.log(dash);
}
crateDashBoard(3);
