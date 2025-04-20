import Direction from "../maze-game/Enum";
import MazeFactory from "./MazeFactory";

class MazeGame {
   createMaze(factory: MazeFactory) {
      const maze = factory.MakeMaze();
      const r1 = factory.MakeRoom(1);
      const r21 = factory.MakeRoom(1);
      const r2 = factory.MakeRoom(2);
      const theDoor = factory.MakeDoor(r1, r2);

      r1.setSide(Direction.North, factory.MakeWall());
      r1.setSide(Direction.East, theDoor);
      r1.setSide(Direction.South, factory.MakeWall());
      r1.setSide(Direction.West, factory.MakeWall());

      r2.setSide(Direction.North, factory.MakeWall());
      r2.setSide(Direction.East, factory.MakeWall());
      r2.setSide(Direction.South, factory.MakeWall());
      r2.setSide(Direction.West, theDoor);

      maze.addRoom(r1);
      maze.addRoom(r2);
      maze.addRoom(r21);

      return maze;
   }
}

const mazeGame = new MazeGame();

// console.log(mazeGame.createMaze());

export default MazeGame;
