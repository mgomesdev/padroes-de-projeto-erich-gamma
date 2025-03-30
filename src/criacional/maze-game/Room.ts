import Direction from "./Enum";
import MapSite from "./MapSite";

class Room extends MapSite {
   private _sides = new Map<Direction, MapSite>();
   private _roomNumber: number;

   constructor(roomNo: number) {
      super();
      this._roomNumber = roomNo;
   }

   public getRoomNo() {
      return this._roomNumber;
   }

   getSide(direction: Direction) {
      return this._sides.get(direction);
   }

   setSide(direction: Direction, mapSite: MapSite): void {
      this._sides.set(direction, mapSite);
   }

   enter() {
      return 0;
   }
}

export default Room;
