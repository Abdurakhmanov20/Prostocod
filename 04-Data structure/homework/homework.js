const createArray = (n) => {
    let array = [];
    
    for(let counter = 0; counter < n; counter++){
        const value = Math.floor(Math.random * 10);

        array.push(value);
    }

    return array;
}
console.log(counter)