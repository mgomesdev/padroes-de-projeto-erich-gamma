import { describe, expect, it } from "vitest";
import Maze from "./Maze";
import Room from "./Room";
import Door from "./Door";
import Direction from "./Enum";
import Wall from "./Wall";

describe("Classe MazeGame que cria o labirinto (main)", () => {
   it("Deve criar o labirinto com as salas, portas, paredes etc...", () => {
      const maze = new Maze();
      const r1 = new Room(1);
      const r21 = new Room(1);
      const r2 = new Room(2);
      const theDoor = new Door(r1, r2);

      r1.setSide(Direction.North, new Wall());
      r1.setSide(Direction.East, theDoor);
      r1.setSide(Direction.South, new Wall());
      r1.setSide(Direction.West, new Wall());

      r2.setSide(Direction.North, new Wall());
      r2.setSide(Direction.East, new Wall());
      r2.setSide(Direction.South, new Wall());
      r2.setSide(Direction.West, theDoor);

      maze.addRoom(r1);
      maze.addRoom(r2);
      maze.addRoom(r21);

      expect(maze).toEqual({
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
