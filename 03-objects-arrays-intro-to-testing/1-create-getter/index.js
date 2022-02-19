/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const pathArr = path.split('.');

    return function(obj) {
        if (Object.keys(obj).length === 0) {
            return;
        } 
        let innerObj = {...obj}
        for (let key of pathArr) {
            innerObj = innerObj[key];
        }
        return innerObj;
    }
}
