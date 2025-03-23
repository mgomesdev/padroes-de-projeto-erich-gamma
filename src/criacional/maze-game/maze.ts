/*
 * Backlog
 *
 * [TODO] - Deve criar a lógica de criação dos labirintos:
 *   [TODO] - Criar a classe Maze (labirinto)
 *       [TODO]- Um labirinto é um conjunto de salas (rooms).
 *
 *   [TODO] - Criar a classe Room (sala).
 *      [TODO] - Deve definir o componente Room para ser utilizado no labirinto.
 *      [TODO] - Uma sala deve conhecer os seus vizinhos.
 *       [TODO] - Possíveis vizinhos são:
 *          [TODO] - uma outra sala (room)
 *          [TODO] - uma parede (wall)
 *          [TODO] - ou uma porta (door) para outra sala (room).
 *          [TODO] - cada sala tem quatro lados (sides).
 *              [TODO] - criar enum Direction para especificar os lados (norte, sul, leste e oeste) de uma sala.
 *          [TODO] - deve definir os relacionamentos-chave entre os componentes do labirinto.
 *          [TODO] - deve armazenar o numéro que identifica as salas do labirinto.
 *
 *
 *   [TODO] -  Criar a classe Wall (parede).
 *      [TODO] -  Deve definir o componente Wall para ser utilizado no labirinto.
 *
 *   [TODO] - Criar a classe Door (porta).
 *      [TODO] - Deve definir o componente Door para ser utilizado no labirinto.
 *
 *   [TODO] - Deve criar a classe abstrata MapSite que representa o lugar no mapa.
 *      [TODO] - deve definor o método 'Enter', o seu significado depende do local em que voce está entrando.
 *          [TODO] - se a porta está aberta, você vai para a proxima sala.
 *          [TODO] - se a porta está fechada, machuca o seu nariz.
 *          [TODO] - deve oferecer uma base simples para operações mais sofisticadas do jogo:
 *              [TODO] - se estiver numa sala e dizer: 'vá para leste', o jogo smplesmente determina qual MapSite está imediatamente ao leste
 *              [TODO] - deve chamar Enter para entrar neste local.
 *              [TODO] - a operação Enter especifica da subclasse determinará se a sua localização mudou ou se você machucou o nariz.
 *
 *    [TODO] - Criar a classe Maze que representa uma coleção de salas.
 *      [TODO] - deve achar uma sala especifica, dado um numero de sala, usando sua operação RoomNo.
 *
 *     [TODO] - Deve criar a classe MazeGame que criar o labirinto.
 *          [TODO] - deve instanciar as classes necessarias para a criação do labirinto (room, wall, door, maze) etc...
 *
 *  [NOTE]:
 *      - todas as classes extendem de MapSite que e a classe abstrata comum para todos os componentes de um labirinto.
 *
 */

enum Direction {
   North,
   South,
   East,
   West,
}

abstract class MapSite {
   abstract enter(): number;
}

class Room extends MapSite {
   private _sides: number[] = [4];
   private _roomNumber: number = 0;

   constructor(roomNo: number) {
      super();
      this._roomNumber = roomNo;
   }

   public room(roomNo: number) {}

   getSide(direction: Direction) {} //MapSite

   setSide(direction: Direction, mapSite: MapSite): void {}

   enter() {
      return 0;
   }
}

class Wall extends MapSite {
   wall() {}

   enter() {
      return 0;
   }
}

class Door extends MapSite {
   private _room1: Room;
   private _room2: Room;
   // private _isOpen: boolean;

   constructor(room1: Room, room2: Room) {
      super();
      this._room1 = room1;
      this._room2 = room2;
   }

   door(room1 = 0, room2 = 0) {}

   enter() {
      return 0;
   }

   otherSideFrom(room: Room) {}
}

class Maze {
   maze() {}

   addRoom(room: Room): void {
      console.log("sala criada");
   }

   romNo(roomNo: number) {} // Room
}

class MazeGame {
   createMaze() {
      const maze = new Maze();
      const r1 = new Room(1);
      const r2 = new Room(2);
      const theDoor = new Door(r1, r2);

      maze.addRoom(r1);
      maze.addRoom(r2);

      r1.setSide(Direction.North, new Wall());
      r1.setSide(Direction.East, theDoor);
      r1.setSide(Direction.South, new Wall());
      r1.setSide(Direction.West, new Wall());

      r2.setSide(Direction.North, new Wall());
      r2.setSide(Direction.East, new Wall());
      r2.setSide(Direction.South, new Wall());
      r2.setSide(Direction.West, theDoor);

      return maze;
   }
}

const mazeGame = new MazeGame();
mazeGame.createMaze();
