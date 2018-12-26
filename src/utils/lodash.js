let _ = {
    get: (object, path, defaultValue) => (
        (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
            .reduce((o, k) => (o || {})[k], object) || defaultValue)

}
export default _;
