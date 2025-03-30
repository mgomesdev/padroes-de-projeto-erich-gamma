import { describe, expect, it } from "vitest";
import Door from "./Door";
import Room from "./Room";

describe("Classe Door (porta)", () => {
   it("Deve definir o componente Door para ser utilizado no labirinto", () => {
      const room1 = new Room(1);
      const room2 = new Room(2);
      const door = new Door(room1, room2);
      expect(door.enter()).toBe(0);
   });
});
