import { describe, expect, it } from "vitest";
import Door from "./Door";
import Wall from "./Wall";
import MazeGame from "./MazeGame";

describe("Classe MazeGame que cria o labirinto (main)", () => {
   it("Deve criar o labirinto com as salas, portas, paredes etc...", () => {
      const mazeGame = new MazeGame();

      expect(mazeGame.createMaze()).toEqual({
         _maze: new Map([
            [
               1,
               expect.objectContaining({
                  _roomNumber: 1,
                  _sides: new Map([
                     [0, expect.any(Wall)],
                     [2, expect.any(Door)],
                     [1, expect.any(Wall)],
                     [3, expect.any(Wall)],
                  ]),
               }),
            ],
            [
               2,
               expect.objectContaining({
                  _roomNumber: 2,
                  _sides: new Map([
                     [0, expect.any(Wall)],
                     [2, expect.any(Wall)],
                     [1, expect.any(Wall)],
                     [3, expect.any(Door)],
                  ]),
               }),
            ],
         ]),
      });
   });
});
