import testObject from "../dataset/data.js";
import mapObject from "../project/mapObject.js";

console.log(
    mapObject(testObject, (value) => String(value))
);