function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    const result = [];

    for(const key in obj){
        result.push([key, obj[key]]);
    }
    return result;
}

export default pairs;