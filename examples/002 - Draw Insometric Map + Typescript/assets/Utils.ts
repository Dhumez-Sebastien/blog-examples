module Engine {
    export class Utils {


        public static generateMap(width : number, height : number, tileNumberMin : number, tileNumberMax : number) : Array<number> {
            var out : Array<any> = [];

            for (var y = 0; y < height; y++) {

                out.push([]);

                for (var x = 0; x < width; x++) {
                    out[y].push([]);

                    out[y][x].push(Math.floor((Math.random() * tileNumberMax) + tileNumberMin));
                }
            }

            return out;
        }
    }
}