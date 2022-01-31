export const randomProperty = (obj) => {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
} //thx https://stackoverflow.com/a/15106541