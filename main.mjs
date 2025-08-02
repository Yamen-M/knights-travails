import knightMoves from "./knightMoves.mjs";

console.log("\nFrom [0,0] to [1,2]:");
knightMoves([0, 0], [1, 2]);

console.log("\nFrom [0,0] to [3,3]:");
knightMoves([0, 0], [3, 3]);

console.log("\nFrom [3,3] to [0,0]:");
knightMoves([3, 3], [0, 0]);

console.log("\nFrom [0,0] to [7,7]:");
knightMoves([0, 0], [7, 7]);

console.log("\nFrom [3,3] to [4,3]:");
knightMoves([3, 3], [4, 3]);
