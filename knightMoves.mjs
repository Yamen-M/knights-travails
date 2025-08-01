export default function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    for (const [dx, dy] of directions) {
      const newX = current[0] + dx;
      const newY = current[1] + dy;
      const newPos = [newX, newY];

      if (
        newX >= 0 &&
        newX < 8 &&
        newY >= 0 &&
        newY < 8 &&
        !visited.has(newPos.toString())
      ) {
        visited.add(newPos.toString());
        queue.push([newPos, [...path, newPos]]);
      }
    }
  }
}
