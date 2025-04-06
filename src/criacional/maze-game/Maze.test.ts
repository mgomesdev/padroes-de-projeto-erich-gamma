import { describe, expect, it } from "vitest";
import Maze from "./Maze";
import Room from "./Room";

describe("Maze - classe para labirintos (coleção de salas)", () => {
   it("Deve criar a classe Maze (labirinto)", () => {
      const maze = new Maze();
      expect(maze.getMaze()).toEqual(new Map([]));
   });

   it("Deve criar um labirinto como um conjunto de salas (rooms)", () => {
      const maze = new Maze();
      const room1 = new Room(1);
      const addRoom1 = maze.addRoom(room1);

      expect(addRoom1).toBe(`Sala ${room1.getRoomNo()} adicionada com sucesso!`);
      expect(maze.addRoom(room1)).toBe(
         `Já existe uma sala com o numero ${room1.getRoomNo()}, escolha outro e tente novamente.`
      );
      expect(maze).toEqual({
         _maze: new Map([
            [
               1,
               expect.objectContaining({
                  _roomNumber: 1,
                  _sides: new Map([]),
               }),
            ],
         ]),
      });
   });

   it("Deve achar uma sala especifica, dado um numero de sala, usando sua operação RoomNo.", () => {
      const maze = new Maze();
      const room = new Room(1);
      maze.addRoom(room);
      expect(maze.roomNo(1)).toEqual(new Room(1));
   });
});
