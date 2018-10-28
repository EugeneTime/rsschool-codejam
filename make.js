function make(a) { 
    let sumItems = 0; 
    let arrCount = [a];
    
    function accumulate(...items) {
        const itemsLength = items.length;
        for (let i = 0; i <= itemsLength - 1; i++) { 
            if (items[i] instanceof Function) {
            sumItems = arrCount.reduce(items[i]);
            }   else {
                arrCount.push(items[i]);
                }
        
        } 
        return accumulate;
    } 

    accumulate.valueOf = () => {
        return sumItems;
    }

    return accumulate;
}

function sum(a, b) {
    return a + b;
}

make(15)(34, 21, 666)(41)(sum);