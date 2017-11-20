class MathUtils {
    /**
     * Converts degrees to radians
     * @param deg Radians
     */
    public static toRadians(deg: number): number {
        return deg * Math.PI / 180;
    }
}

export default MathUtils;