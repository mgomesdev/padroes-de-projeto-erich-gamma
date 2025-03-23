### Jogo de Labirinto (Maze Game)

Usaremos um exemplo comum - a construção de um labirinto (Maze, em inglês) para ilustrar as implementações.

### Regras

-  O labirinto e o jogo variarão ligeiramente de padrão para padrão.
-  Algumas vezes, o jogo será simplesmente encontrar a saida do labirinto; nesse caso, o jogador provavelmente terá apenas uma visão local do labirinto.
-  Algumas vezes, labirintos contêm problemas para resolver e perigos para superar, e estes jogos podem fornecer um mapa (map) da parte do labirinto que não foi explorada.

> Ignoraremos muitos detalhes do que pode estar num labirinto e se um jogo de labirinto tem um unico ou varios jogadores.

> Focalizaremos apenas em como os labirintos são criados.

### Funcionamento

-  Definimos um labirinto como um conjunto de salas (rooms).
   -  Uma sala conhece os seus vizinhos;
   -  Possiveis vizinhos são uma outra sala, uma parede (wall), ou uma porta (door) para uma outra sala.
   -  As classes Room, Door e Wall definem os componentes do labirinto usados em todos os nossos exemplos.
   -  Definimos somente partes dessas classes que são importantes para criar um labirinto.

> Igonoraremos jogadores, operações para exibir informações e vagar pelo labirinto e outras funcionalidades importantes que não são relevantes para a construção do labirinto.

### Diagrama mostrando os relacionamentos entre as classes

![maze game](/readme/maze-game/maze-game.png)

> Cada sala tem quatro lados (sides), nós usamos uma enumeração Direction para especificar os lados norte, sul, leste e oeste de uma sala.

#### MapSite

-  A classe MapSite (lugar no mapa) é a classe abstrata comum para todos os componentes de um labirinto.
-  MapSite define somente uma operação, `Enter`, o seu significado depende do local em que você está entrando.
   -  Se voce entrar numa sala, então sua localização muda.
   -  Se tenta entrar em uma porta, então acontece uma de duas coisas:
      -  se a porta estiver aberta, vocÊ vai para a proxima sala.
      -  se a porta estiver fechada, machuca o seu nariz.
   -  `Enter` fornece uma base simples para operações mais sofisticadas do jogo.
      -  Por exemplo: se você está numa sala e diz: "Vá para leste", o jogo simplesmente determina qual MapSite está imediatamente ao leste e então chama Enter para entrar neste local.
      -  A operação Enter específica da subclasse determinará se a sua localização mudou ou se você machucou o nariz.

#### Wall

-  Representam a parede ou a porta que existe em cada lado de uma sala.

#### Room

-  Room é a subclasse concreta de MapSite que define os relacionamentos-chave entre os componentes do labirinto.
-  Ela mantém referências para outros objetos de MapSite e armazena o número de uma sala.
-  Esses números identificarão as salas no labirinto.

#### Maze

-  Representa uma coleção de salas.
-  Maze também pode achar uma sala específica, dado um número de sala, usando sua operação RoomNo.

#### MazeGame

-  Cria o labirinto.
-  Uma maneira simplista de criar um labirinto é através de uma série de operações que acrescentam componentes a um labirinto e então os interconectam.
