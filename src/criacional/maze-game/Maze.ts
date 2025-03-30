/* [NOTE]:
 * todas as classes extendem de MapSite
 * que e a classe abstrata comum para todos os componentes de um labirinto.
 */

import Room from "./Room";

class Maze {
   maze() {}

   addRoom(room: Room): void {
      console.log("sala criada");
   }

   romNo(roomNo: number) {} // Room
}

export default Maze;
