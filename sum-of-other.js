function sumOfOther (sample) {
    let sumItems = 0;
    let result = [];
    let ItemLength = sample.length;

    for (let i = 0; i <= ItemLength - 1; i++) {
        let arrWithoutItem = sample.filter(item => item !== sample[i]);
        sumItems = arrWithoutItem.reduce((acc, item) => acc + item);
        result.push(sumItems);
    }

    return result;
}