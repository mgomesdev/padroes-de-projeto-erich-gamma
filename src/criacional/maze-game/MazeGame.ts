import Door from "./Door";
import Direction from "./Enum";
import Maze from "./Maze";
import Room from "./Room";
import Wall from "./Wall";

class MazeGame {
   createMaze() {
      const maze = new Maze();
      const r1 = new Room(1);
      const r2 = new Room(2);
      const theDoor = new Door(r1, r2);

      r1.setSide(Direction.North, new Wall());
      r1.setSide(Direction.East, theDoor);
      r1.setSide(Direction.South, new Wall());
      r1.setSide(Direction.West, new Wall());

      r2.setSide(Direction.North, new Wall());
      r2.setSide(Direction.East, new Wall());
      r2.setSide(Direction.South, new Wall());
      r2.setSide(Direction.West, theDoor);

      maze.addRoom(r1);
      maze.addRoom(r2);

      return maze;
   }
}

export default MazeGame;
