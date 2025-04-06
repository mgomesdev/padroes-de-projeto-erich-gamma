import { expect, describe, it } from "vitest";
import MapSite from "./MapSite";

describe("Classe abstrata MapSite que representa o lugar no mapa", () => {
   it("Método 'Enter', o seu significado depende do local em que voce está entrando:", () => {
      const mapSite = new ConcreteMapSite();
      const enter = mapSite.enter();
      expect(enter).toEqual("");
   });
});

class ConcreteMapSite extends MapSite {
   enter() {
      return "";
   }
}
