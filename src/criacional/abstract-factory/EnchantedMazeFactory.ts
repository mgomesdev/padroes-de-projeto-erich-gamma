import Room from "../maze-game/Room";
import DoorNeedlingSpell from "./DoorNeedlingSpell";
import EnchantedRoom from "./EnchantedRoom";
import MazeFactory from "./MazeFactory";

class EnchantedMazeFactory extends MazeFactory {
   MakeRoom(n: number) {
      return new EnchantedRoom(n);
   }

   MakeDoor(r1: Room, r2: Room) {
      return new DoorNeedlingSpell(r1, r2);
   }
}

export default EnchantedMazeFactory;
