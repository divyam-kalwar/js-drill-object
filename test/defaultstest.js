
import defaults from "../project/defaults.js";

const testObject = {
    name: "Bruce Wayne",
    age: undefined,
    location: "Gotham"
};

const defaultProps = {
    name: "Guest",
    age: 25,
    location: "Gothan"
};

const result = defaults(testObject, defaultProps);

console.log(result);