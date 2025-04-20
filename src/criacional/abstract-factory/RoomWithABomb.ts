import Room from "../maze-game/Room";

class RoomWithABomb extends Room {
   private hasBomb = false;

   checkHasBomb() {
      return this.hasBomb;
   }

   setBomb(value: boolean) {
      this.hasBomb = value;
   }

   enter() {
      return "A bomba explodiu";
   }
}

export default RoomWithABomb;
