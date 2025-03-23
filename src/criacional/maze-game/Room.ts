import Direction from "./Enum";
import MapSite from "./MapSite";

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

export default Room;
