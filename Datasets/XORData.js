const isBrowser = typeof process !== 'object';
let dataset = [
    {
        input:[0,0],
        target:[0]
    },
    {
        input:[1,1],
        target:[0]
    },
    {
        input:[0,1],
        target:[1]
    },
    {
        input:[1,0],
        target:[1]
    }

];
if (!isBrowser) {
    module.exports = {
        dataset: dataset
    }
}
