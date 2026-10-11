function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    const result = [];
    for(const key in obj){
        result.push(key);
    }

    return result;
}

export default keys;