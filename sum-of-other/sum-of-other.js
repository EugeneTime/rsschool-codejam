module.exports = function sumOfOther (sample) {
    const ItemLength = sample.length;
    let result = [];

    for (let i = 0; i <= ItemLength - 1; i++) {
        let arrWithoutItem = sample.filter(item => item !== sample[i]);
        let sumItems = arrWithoutItem.reduce((acc, item) => acc + item);
        result.push(sumItems);
    }

    return result;
};