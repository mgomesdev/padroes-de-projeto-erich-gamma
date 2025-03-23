import { expect, describe, it } from "vitest";
import MapSite from "./MapSite";

class ConcreteMapSite extends MapSite {
   enter(): number {
      return 0;
   }
}

describe("Deve extender a classe abstrata MapSite e implementar os metodos corretamente", () => {
   it("Deve implementar o método enter()", () => {
      const mapSite = new ConcreteMapSite();
      const enter = mapSite.enter();
      expect(enter).toBe(0);
   });
});
