import Wall from "../maze-game/Wall";

class BombedWall extends Wall {
   wall() {
      return "um dano foi feito na parede";
   }
}

export default BombedWall;
