import { describe, expect, it } from "vitest";
import Door from "./Door";
import Room from "./Room";
import Wall from "./Wall";

describe("Classe Door (porta)", () => {
   it("Deve definir o componente Door para ser utilizado no labirinto", () => {
      const room1 = new Room(1);
      const room2 = new Room(2);
      const door = new Door(room1, room2);
      expect(door.getIsOpen()).toBeFalsy();
   });

   describe("Deve entrar na porta", () => {
      it("Se a porta está aberta, você vai para a proxima sala", () => {
         const door = new Door(new Room(1), new Room(2));
         door.setIsOpen(true);
         expect(door.enter()).toBe("A porta está aberta, você vai para a proxima sala");
      });

      it("Se a porta está fechada, machuca o seu nariz", () => {
         const door = new Door(new Room(1), new Room(2));
         expect(door.enter()).toBe("A porta está fechada, machuca o seu nariz");
      });
   });

   it("Deve retornar a sala atual onde está a porta", () => {
      const door = new Door(new Room(7), new Room(3));
      expect(door.otherSideFrom()).instanceOf(Room);
   });

   it("Deve retornar para onde a porta irá levar", () => {
      const door = new Door(new Room(7), new Wall());
      expect(door.door()).toBeInstanceOf(Wall);
   });

   it("Deve retornar se a porta está aberta ou fechada", () => {
      const door = new Door(new Room(7), new Room(3), true);
      expect(door.getIsOpen()).toBeTruthy();
   });
});
