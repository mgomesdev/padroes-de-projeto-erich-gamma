import { describe, expect, it } from "vitest";
import Room from "./Room";
import Direction from "./Enum";
import Wall from "./Wall";
import Door from "./Door";

describe("Room - classe que representa as salas", () => {
   it("Deve definir o componente Room para ser utilizado no labirinto", () => {
      const room = new Room(7);

      expect(room).toEqual({
         _roomNumber: 7,
         _sides: new Map([]),
      });
   });

   it("Deve conseguir entrar na sala", () => {
      const room = new Room(7);
      expect(room.enter()).toEqual({});
      expect(room.getRoomNo()).toBe(7);
   });

   describe("Deve conhecer os seus possiveis vizinhos.", () => {
      it("Deve conhecer uma outra sala (room)", () => {
         const room = new Room(7);
         room.setSide(Direction["North"], new Door(room, new Room(3)));
         expect((room.getSide(Direction["North"])?.enter().door as Room).getRoomNo()).toBe(3);
      });

      it("Deve conhecer uma parede (wall)", () => {
         const room = new Room(7);
         room.setSide(Direction["North"], new Wall());
         expect(room.getSide(Direction["North"])).toEqual(new Wall());
      });

      it("Deve conhecer uma porta (door) para outra sala (room)", () => {
         const room = new Room(7);
         room.setSide(Direction["North"], new Wall());
         room.setSide(Direction["East"], new Door(room, new Room(3)));
         const door = room.getSide(Direction["East"]);
         expect(door).instanceOf(Door);
      });
   });

   it("Cada sala deve ter quatro lados (sides)", () => {
      const room = new Room(7);

      room.setSide(Direction["North"], new Wall());
      room.setSide(Direction["East"], new Wall());
      room.setSide(Direction["West"], new Wall());
      room.setSide(Direction["South"], new Wall());

      expect(room).toEqual({
         _roomNumber: 7,
         _sides: new Map([
            [0, new Wall()],
            [2, new Wall()],
            [3, new Wall()],
            [1, new Wall()],
         ]),
      });
   });
});
