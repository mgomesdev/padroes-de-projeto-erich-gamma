import { describe, expect, it } from "vitest";
import MazeFactory from "./MazeFactory";
import Room from "../maze-game/Room";
import Wall from "../maze-game/Wall";
import Door from "../maze-game/Door";

describe("A classe MazeFactory pode criar componentes de labirintos", () => {
   it("Ela constroi salas, paredes e portas entre salas", () => {
      const mazeFactory = new MazeFactory();
      const room1 = mazeFactory.MakeRoom(3);
      const room2 = mazeFactory.MakeRoom(7);
      const wall = mazeFactory.MakeWall();
      const door = mazeFactory.MakeDoor(room1, room2);

      expect(room1).toBeInstanceOf(Room);
      expect(room2).toBeInstanceOf(Room);
      expect(wall).toBeInstanceOf(Wall);
      expect(door).toBeInstanceOf(Door);
   });
});
