### Aplicando o padrão Abstract Factory (Kit) para criar os labirintos

-  Aplicaremos o padrão `Abstract Factory` para criar os labirintos.
-  `Abstract Factory` é um padrão criacional com o propósito de criação de objetos.

### MazeFactory

-  A classe `MazeFactory` pode criar componentes de labirintos.
-  Ela constroi salas, paredes e portas entre salas.
-  Pode ser usada por um programa que lê plantas de labirintos de um arquivo e constroi o correspondente labirinto.
-  Ou pode ser usada por um programa que constroi labirintos aleatoriamente.
-  Os programas que constroem labirintos recebem `MazeFactory` como argumento, de maneira que o programador pode especificar as classes de salas, paredes e portas a serem construidas.

### EnchantedMazeFactory

-  Uma fabrica para labirintos encantados, introduzindo subclasses de `MazeFactory`.
-  `EnchantedMazeFactory` redefinirá diferentes funções membro e retornará diferentes subclasses de `Room, Wall etc...`

### RoomWithABomb e BombedWall

-  Suponha agora que queiramos construir um jogo de labirinto no qual uma sala pode ter uma bomba colocada nela.
-  Se a bomba detona, ela danificará as paredes (no minimo).
-  Podemos construir uma subclasse de `Room` para registrar se uma sala tem uma bomba nela e se a bomba explodiu.
-  Também necessitaremos de uma subclasse de `Wall` para manter o registro do dano feito á parede.
-  Chamaremos estas classes de `RoomWithABomb` e `BombedWall`.

### BombedMazeFactory

-  A ultima classe que definiremos é `BombedMazeFactory`, uma subclasse de `MazeFactory` que assegura que as paredes são da classe `BombedWall` e as salas são da classe `RoomWithABomb`.
-  `BombedMazeFactory` somente necessita redefinir duas funções: `MakeWall` e `MakeRoom`.
-  Para construir um simples labirinto que pode conter bombas, simplesmente chamamos `CreateMaze` com uma `BombedMazeFactory`.

### Outras Informações

-  `CreateMaze` pode receber uma instancia de `EnchantedMazeFactory` da mesma maneira para construir labirintos encantados.
-  Note que `MazeFactory` é apenas uma coleção de métodos de fábricas.
-  Essa é a maneira mais comum de implementar o padrão `Abstract Factory`.
-  Note também que `MazeFactory` não é uma classe abstrata: assim, ela funciona tanto como `Abstract Factory` quanto como `ConcreteFactory`.
-  Esta é uma outra implementação comum para aplicações simples do padrão Abstract Factory.
-  Porque a `MazeFactory` é uma classe concreta que consiste inteiramente de métodos de fábricas, é fácil criar uma nova `MazeFactory` criando uma subclasse e redefinindo as operações que necessitam ser mudadas.
-  `CreateMaze` usou a operação `SetSide` sobre as salas para especificar os seus lados.
   -  Se ela cria salas com uma `BombedMazeFactory`, então o labirinto será constituido de objetos `RoomWithABomb`, com lados `BombedWall`.
-  A utilização do padrão `Abstract Factory` para construir paredes ajuda a evitar esses erros em tempo de execução ao garantir que somente certos tipos de paredes podem ser criados.

### Padrôes relacionados

-  As classes `Abstract Factory` são frequentemente implementadas com `Factory Method`, `Prototype`.
-  Uma `fabrica concreta` é frequentemente um `Singleton`.
