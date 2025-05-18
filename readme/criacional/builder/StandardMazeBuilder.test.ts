import { describe, it } from "vitest";

describe("Dada a interface MazeBuilder, podemos criar a função membro CreateMaze, de forma a aceitar esse construitor (builder) como parametro", () => {
   it.todo("O padrao Builder encapsula como os objetos são criados, neste caso através da interface MazeBuilder.");
   it.todo("Podemos reutilizar MazeBuilder para construir diferentes tipos de labirintos.");
   it.todo(
      "MazeBuilder, ele proprio, nao cria labirintos; sua finalidade principal é somente definir uma interface para criar labirintos."
   );
   it.todo(
      "MazeBuilder define implementações vazias primariamente por conveniencia. Subclasses fazem o trabalho real."
   );
   it.todo(
      "A subclasse StandardMazeBuilder é uma implementação que constrio labirintos simples. Ela mantem o controle do labirinto que está construindo através da variavel _currentMaze."
   );
   it.todo("A CommonWall é uma operação utilitária que determina a direção da parede comum entre duas salas.");
   it.todo(
      "A operação BuildMaze instancia um Maze (labirinto) que outras operações montarão e que, em algum momento, retornarão parao cliente (com GetMaze)"
   );
   it.todo("A operação BuildRoom cria uma sala e constroi as paredes em volta dela.");
   it.todo(
      "Para construir uma porta entre duas salas, StandardMazeBuilder procuira ambas as salas no labirinto e encontra a parede adjacente"
   );
   it.todo("Os clientes podem usar CreateMaze em conjunto com StandardMazeBuilder para criar um labirinto.");
});
