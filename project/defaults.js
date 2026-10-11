function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    
    for (const key in defaultProps) {
        if(obj[key] === undefined){
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

export default defaults;