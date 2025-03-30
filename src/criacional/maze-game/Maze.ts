import Room from "./Room";

class Maze {
   private _maze = new Map<number, Room>();

   // TODO: criar teste para 'getMaze'
   getMaze() {
      return this._maze;
   }

   // TODO:criar teste para o cenário 'hasRoom'
   addRoom(room: Room): void {
      const hasRoom = this.getMaze().get(room.getRoomNo());

      // TODO: criar teste para 'hasRoom'
      if (hasRoom) {
         console.log(`Já existe uma sala com o numero ${room.getRoomNo()}, escolha outro e tente novamente.`);
         return;
      }

      if (this.getMaze().set(room.getRoomNo(), room)) console.log(`Sala ${room.getRoomNo()} adicionada com sucesso!`);
   }

   // TODO: criar teste para 'roomNo'
   roomNo(room: Room) {
      return this.getMaze().get(room.getRoomNo())?.getRoomNo();
   }
}

export default Maze;
