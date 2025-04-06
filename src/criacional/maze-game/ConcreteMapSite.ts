import Direction from "./Enum";
import MapSite from "./MapSite";
import Room from "./Room";

export default class ConcreteMapSite extends MapSite {
   enter() {
      return "";
   }

   operation({ command, room }: { command: string; room: Room }) {
      switch (command) {
         case "vá para o leste":
            return room.getSide(Direction["East"])?.enter();
            break;
         case "vá para o norte":
            return room.getSide(Direction["North"])?.enter();
            break;
         case "vá para o oeste":
            return room.getSide(Direction["West"])?.enter();
            break;
         case "vá para o sul":
            return room.getSide(Direction["South"])?.enter();
            break;
         default:
            return "";
      }
   }
}
