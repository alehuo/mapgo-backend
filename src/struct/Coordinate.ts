/**
 * Coordinate class.
 */
class Coordinate {
    /**
     * Latitude.
     */
    public lat : number;
    /**
     * Longitude.
     */
    public lon : number;

    constructor(lat: number, lon: number) {
        this.lat = lat;
        this.lon = lon;
    }
}

export default Coordinate;