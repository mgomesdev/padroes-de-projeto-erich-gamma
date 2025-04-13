import { describe, it } from "vitest";

describe("Subclasse de MazeFactory que assegura que as paredes são da classe BombedWall e as salas são da classe RoomWithABomb", () => {
   it.todo("BombedFactory somente necessita redefinir duas funções: MakeWall e MakeRoom");
   it.todo(
      "Para construir um simples labirinto que pode conter bombas, simplesmente chamamos CreateMaze com uma BombedMazeFactory"
   );
});
