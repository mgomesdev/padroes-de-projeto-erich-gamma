import { describe, expect, it } from "vitest";
import Door from "../maze-game/Door";
import Wall from "../maze-game/Wall";
import MazeGame from "./MazeGame";
import BombedMazeFactory from "./BombedMazeFactory";

describe("Classe MazeGame que cria o labirinto (main)", () => {
   it("Deve criar o labirinto com as salas, portas, paredes etc...", () => {
      const game = new MazeGame();
      const factory = new BombedMazeFactory();

      expect(game.createMaze(factory)).toEqual({
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
