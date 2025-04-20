import BombedWall from "./BombedWall";
import MazeFactory from "./MazeFactory";
import RoomWithABomb from "./RoomWithABomb";

class BombedMazeFactory extends MazeFactory {
   MakeWall() {
      return new BombedWall();
   }

   MakeRoom(n: number) {
      return new RoomWithABomb(n);
   }
}

export default BombedMazeFactory;
