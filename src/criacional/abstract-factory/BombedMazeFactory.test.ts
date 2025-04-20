import { describe, expect, it } from "vitest";
import BombedMazeFactory from "./BombedMazeFactory";
import BombedWall from "./BombedWall";
import RoomWithABomb from "./RoomWithABomb";
import MazeGame from "./MazeGame";

describe("Subclasse de MazeFactory que assegura que as paredes são da classe BombedWall e as salas são da classe RoomWithABomb", () => {
   it("BombedFactory somente necessita redefinir duas funções: MakeWall e MakeRoom", () => {
      const bombedFactory = new BombedMazeFactory();
      expect(bombedFactory.MakeWall()).toBeInstanceOf(BombedWall);
      expect(bombedFactory.MakeRoom(3)).toBeInstanceOf(RoomWithABomb);
   });

   it("Para construir um simples labirinto que pode conter bombas, simplesmente chamamos CreateMaze com uma BombedMazeFactory", () => {
      const bombedFactory = new BombedMazeFactory();
      const game = new MazeGame();

      expect(game.createMaze(bombedFactory)).toEqual({
         _maze: new Map([
            [
               1,
               expect.objectContaining({
                  _roomNumber: 1,
                  _sides: new Map([
                     [0, expect.any(BombedWall)],
                     [1, expect.any(BombedWall)],
                     [
                        2,
                        expect.objectContaining({
                           _isOpen: false,
                           _room1: expect.any(RoomWithABomb),
                           _room2: expect.any(RoomWithABomb),
                        }),
                     ],
                     [3, expect.any(BombedWall)],
                  ]),
               }),
            ],
            [
               2,
               expect.objectContaining({
                  _roomNumber: 2,
                  _sides: new Map([
                     [0, expect.any(BombedWall)],
                     [1, expect.any(BombedWall)],
                     [2, expect.any(BombedWall)],
                     [
                        3,
                        expect.objectContaining({
                           _isOpen: false,
                           _room1: expect.any(RoomWithABomb),
                           _room2: expect.any(RoomWithABomb),
                        }),
                     ],
                  ]),
               }),
            ],
         ]),
      });
   });
});
