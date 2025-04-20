import { describe, expect, it } from "vitest";
import EnchantedMazeFactory from "./EnchantedMazeFactory";
import Room from "../maze-game/Room";
import Door from "../maze-game/Door";

describe("Uma fabrica de labirintos encantados, introduzindo subclasses de MazeFactory", () => {
   it("EnchantedMazeFactory redefinirá diferentes funções membro e retornará diferentes subclasses de Room, Wall etc...", () => {
      const enchanted = new EnchantedMazeFactory();
      const r1 = enchanted.MakeRoom(3);
      const r2 = enchanted.MakeRoom(7);
      const door = enchanted.MakeDoor(r1, r2);

      expect(r1).toBeInstanceOf(Room);
      expect(r2).toBeInstanceOf(Room);
      expect(door).toBeInstanceOf(Door);
   });
});
