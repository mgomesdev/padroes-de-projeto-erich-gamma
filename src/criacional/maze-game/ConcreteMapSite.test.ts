import { describe, expect, it } from "vitest";
import ConcreteMapSite from "./ConcreteMapSite";
import Room from "./Room";
import Door from "./Door";
import Direction from "./Enum";
import Wall from "./Wall";

describe("Deve oferecer uma base simples para operações mais sofisticados do jogo:", () => {
   it("Se estiver numa sala e dizer: 'vá para leste', o jogo simplesmente determina qual MapSite está imediatamente ao leste", () => {
      const mapSite = new ConcreteMapSite();
      const room = new Room(7);
      const door1 = new Door(room, new Room(3));
      const door2 = new Door(room, new Room(3));

      door2.setIsOpen(true);

      room.setSide(Direction["North"], door1);
      room.setSide(Direction["South"], new Wall());
      room.setSide(Direction["East"], door2);
      room.setSide(Direction["West"], new Wall());

      const operationNorth = mapSite.operation({ command: "vá para o norte", room });
      const operationSouth = mapSite.operation({ command: "vá para o sul", room });
      const operationEast = mapSite.operation({ command: "vá para o leste", room });
      const operationWest = mapSite.operation({ command: "vá para o oeste", room });

      expect(operationNorth).toBe("A porta está fechada, machuca o seu nariz");
      expect(operationSouth).toBe("Machucou o nariz");
      expect(operationEast).toBe("A porta está aberta, você vai para a proxima sala");
      expect(operationWest).toBe("Machucou o nariz");
   });
});
