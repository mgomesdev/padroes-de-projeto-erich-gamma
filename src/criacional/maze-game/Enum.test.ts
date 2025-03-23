import { describe, expect, it } from "vitest";
import Direction from "./Enum";

describe("Deve definir os Enum corretamente", () => {
   it("Deve definir o Enum Direction corretamente", () => {
      const direction = Direction;
      expect(direction["North"]).toBe(0);
      expect(direction["South"]).toBe(1);
      expect(direction["East"]).toBe(2);
      expect(direction["West"]).toBe(3);
   });
});
