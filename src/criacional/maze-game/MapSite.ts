import Room from "./Room";

abstract class MapSite {
   abstract enter(): { door?: Room; otherSideFrom?: Room };
}

export default MapSite;
