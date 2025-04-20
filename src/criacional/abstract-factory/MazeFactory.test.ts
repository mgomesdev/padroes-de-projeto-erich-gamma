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
   it.todo(
      "Pode ser usada por um programa que lê plantas de labirintos de uma rquivo e constroi o correspondente labirinto"
   );
   it.todo("Pode ser usada por um programa que constroi labirintos aleatoriamente.");
   it.todo(
      "Os programas que constroem labirintos recebem MazeFacotry como argumento, de maneira que o programador pode especificar as classes de salas, paredes e portas a serem construidas."
   );
   it.todo(
      "Deve modificar o método CreateMaze em MazeGame para remover a codificação rigida dos nomes das classes, simplificando a criação de labirintos diferentes."
   );
});
