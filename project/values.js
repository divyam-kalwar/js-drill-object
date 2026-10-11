function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    const result = [];
    for(const key in obj){
        result.push(obj[key]);
    }

    return result;
}

export default values;