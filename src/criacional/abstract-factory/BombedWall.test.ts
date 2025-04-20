import { describe, expect, it } from "vitest";
import BombedWall from "./BombedWall";

describe("Subclasse de Wall para manter o registro do dano feito á parede", () => {
   it("Deve manter o registro do dano feito á parede", () => {
      const bombedWall = new BombedWall();
      expect(bombedWall.wall()).toBe("um dano foi feito na parede");
   });
});
