function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject

    const result = {};

    for(const key in obj){
        result[key] = cb(obj[key]);
    }

    return result;
}

export default mapObject;
