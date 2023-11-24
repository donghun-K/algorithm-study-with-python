/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = Array(rooms.length).fill(false);

  const dfs = (roomNum) => {
    visited[roomNum] = true;
    for (const key of rooms[roomNum]) {
      if (visited[key]) continue;
      dfs(key);
    }
  };
    
  dfs(0);

  return visited.every((x) => x === true);
};
