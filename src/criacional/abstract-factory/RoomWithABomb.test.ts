import { describe, expect, it } from "vitest";
import RoomWithABomb from "./RoomWithABomb";

describe("Subclasse de Room para registrar se uma sala tem uma bomba nela e se a bomba explodiu", () => {
   it("Deve registrar se uma sala tem uma bomba nela.", () => {
      const roomWithABomb = new RoomWithABomb(3);
      roomWithABomb.setBomb(true);
      expect(roomWithABomb.checkHasBomb()).toBeTruthy();
   });

   it("Deve registrar se a bomba explodiu", () => {
      const roomWithABomb = new RoomWithABomb(7);
      expect(roomWithABomb.enter()).toBe("A bomba explodiu");
   });
});
