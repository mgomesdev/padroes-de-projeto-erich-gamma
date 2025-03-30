import { expect, describe, it } from "vitest";
import MapSite from "./MapSite";

class ConcreteMapSite extends MapSite {
   enter() {
      return {};
   }
}

describe("Classe abstrata MapSite que representa o lugar no mapa", () => {
   describe("Método 'Enter', o seu significado depende do local em que voce está entrando:", () => {
      it("Deve definir o método 'Enter'", () => {
         const mapSite = new ConcreteMapSite();
         const enter = mapSite.enter();
         expect(enter).toEqual({});
      });

      it.todo("Se a porta está aberta, você vai para a proxima sala");
      it.todo("Se a porta está fechada, machuca o seu nariz");

      describe.todo("Deve oferecer uma base simples para operações mais sofisticados do jogo:", () => {
         it.todo(
            "Se estiver numa sala e dizer: 'vá para leste', o jogo simplesmente determina qual MapSite está imediatamente ao leste"
         );

         it.todo("Deve chamar 'Enter' para entrar neste local");

         it.todo(
            "A operação 'Enter' especifica da subclasse determinará se a sua localização mudou ou se você machucou o nariz."
         );
      });
   });
});
