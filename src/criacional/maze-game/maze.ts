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
