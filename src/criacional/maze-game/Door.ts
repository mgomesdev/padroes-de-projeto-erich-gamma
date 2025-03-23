import MapSite from "./MapSite";
import Room from "./Room";

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

export default Door;
