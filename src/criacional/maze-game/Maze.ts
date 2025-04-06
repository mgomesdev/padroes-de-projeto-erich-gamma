import Room from "./Room";

class Maze {
   private _maze = new Map<number, Room>();

   getMaze() {
      return this._maze;
   }

   addRoom(room: Room): string | void {
      const hasRoom = this.getMaze().get(room.getRoomNo());
      if (hasRoom) return `Já existe uma sala com o numero ${room.getRoomNo()}, escolha outro e tente novamente.`;
      if (this.getMaze().set(room.getRoomNo(), room)) return `Sala ${room.getRoomNo()} adicionada com sucesso!`;
   }

   roomNo(roomNo: number) {
      return this.getMaze().get(roomNo);
   }
}

export default Maze;
