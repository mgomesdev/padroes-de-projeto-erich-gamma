import { describe, it } from "vitest";

describe("Definiremos uma variante da função-membro CreateMaze que aceita como argumento um construtor (builder) da classe MazeBuilder", () => {
   it.todo("Essa interface pode criar três coisas (labirinto, salas com numero de sala, portas entre salas numeradas.");
   it.todo("A operação GetMaze, retorna o labirinto para o cliente.");
   it.todo("As subclasses MazeBuilder redefinirão essa operação para retornar o labirinto que construiram.");
   it.todo(
      "Todas as operações de construção de labirinto de MazeBuilder, por omissão, nada fazem. Elas não são declaradas virtuais puras para permitir ás classes derivadas redefinir somente aqueles métodos nos quais estiverem interessadas."
   );
});
