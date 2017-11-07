/**
 * Utility class for filling arrays with different types of elements.
 * @author Aleksi Huotala
 */
class Arrays {
    /**
     * Fills an array with objects.
     * @param arr Array
     * @param obj object
     */
    public static fillObj(arr : Object[], obj : Object) : void {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = obj;
        }
    }
    /**
     * Fills an array with numbers.
     * @param arr Array
     * @param obj number
     */
    public static fillNum(arr : number[], obj : number) : void {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = obj;
        }
    }
    /**
     * Fills an array with strings.
     * @param arr Array
     * @param obj string
     */
    public static fillString(arr : string[], obj : string) : void {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = obj;
        }
    }
    /**
     * Fills an array with booleans
     * @param arr Array
     * @param obj boolean
     */
    public static fillBoolean(arr : boolean[], obj : boolean) : void {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = obj;
        }
    }
}
export default Arrays;