import { describe, expect, it } from "vitest";
import EnchantedRoom from "./EnchantedRoom";
import Room from "../maze-game/Room";

describe("EnchantedRoom, uma fabrica de labirintos encantados", () => {
   it("Deve retornar retornanr diferentes subclasses de Room, Wall etc...", () => {
      const enchantedRoom = new EnchantedRoom(3);
      expect(enchantedRoom).toBeInstanceOf(Room);
   });
});
