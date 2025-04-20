import { describe, expect, it } from "vitest";
import DoorNeedlingSpell from "./DoorNeedlingSpell";
import Door from "../maze-game/Door";
import RoomWithABomb from "./RoomWithABomb";

describe("DoorNeedlingSpell", () => {
   it("Deve criar uma instancia de DoorNeedlingSpell", () => {
      const doorNeedlingSpell = new DoorNeedlingSpell(new RoomWithABomb(3), new RoomWithABomb(7));
      expect(doorNeedlingSpell).toBeInstanceOf(Door);
   });
});
