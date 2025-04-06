import { describe, expect, it } from "vitest";
import Wall from "./Wall";

describe("Classe Wall (parede)", () => {
   it("Deve definir o componente Wall para ser utilizado no labirinto.", () => {
      const wall = new Wall();
      expect(wall.enter()).toBe("Machucou o nariz");
   });
});
