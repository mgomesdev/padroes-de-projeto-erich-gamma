### Aplicando o padrão Abstract Factory para criar os labirintos

-  Aplicaremos o padrão `abstract factory` para criar os labirintos.

### MazeFactory

-  A classe `MazeFactory` pode criar componentes de labirintos.
-  Ela constroi salas, paredes e portas entre salas.
-  Pode ser usada por um programa que lê plantas de labirintos de um arquivo e constroi o correspondente labirinto.
-  Ou pode ser usada por um programa que constroi labirintos aleatoriamente.
-  Os programas que constroem labirintos recebem `MazeFactory` como argumento, de maneira que o programador pode especificar as classes de salas, paredes e portas a serem construidas.
