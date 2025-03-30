abstract class MapSite {
   abstract enter(): { door?: MapSite; otherSideFrom?: MapSite };
}

export default MapSite;
