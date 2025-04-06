import MapSite from "./MapSite";
import Room from "./Room";

class Door extends MapSite {
   private _room1: Room;
   private _room2: MapSite;
   private _isOpen: boolean;

   constructor(room1: Room, room2: MapSite, isOpen = false) {
      super();
      this._room1 = room1;
      this._room2 = room2;
      this._isOpen = isOpen;
   }

   door() {
      return this._room2;
   }

   enter() {
      return "";
   }

   otherSideFrom() {
      return this._room1;
   }

   getIsOpen() {
      return this._isOpen;
   }
}

export default Door;
