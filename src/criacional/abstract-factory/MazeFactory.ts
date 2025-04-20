import Door from "../maze-game/Door";
import Maze from "../maze-game/Maze";
import Room from "../maze-game/Room";
import Wall from "../maze-game/Wall";

class MazeFactory {
   MakeMaze() {
      return new Maze();
   }

   MakeWall() {
      return new Wall();
   }

   MakeRoom(n: number) {
      return new Room(n);
   }

   MakeDoor(r1: Room, r2: Room) {
      return new Door(r1, r2);
   }
}

export default MazeFactory;
