function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let cameraPosition = -30_000;

  for (let i = 0; i < routes.length; i++) {
    if (cameraPosition < routes[i][0]) {
      count++;
      cameraPosition = routes[i][1];
    }
  }

  return count;
}
