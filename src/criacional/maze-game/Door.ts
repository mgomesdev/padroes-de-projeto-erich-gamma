import MapSite from "./MapSite";
import Room from "./Room";

class Door extends MapSite {
   private _room1: Room;
   private _room2: Room;
   private _isOpen?: boolean;

   constructor(room1: Room, room2: Room, isOpen?: boolean) {
      super();
      this._room1 = room1;
      this._room2 = room2;
      this._isOpen = isOpen;
   }

   door() {
      return this._room2;
   }

   enter() {
      return {
         door: this.door(),
         otherSideFrom: this.otherSideFrom(),
      };
   }

   otherSideFrom(): Room {
      return this._room1;
   }
}

export default Door;
