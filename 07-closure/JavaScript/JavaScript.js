function canGetCount(n) {
    let counter = 0;
  
    return function() {
      if (counter < n) {
        counter++;
        return 'yes';
      } else {
        return 'no';
      }
    };
  }

const myFunction = canGetCount(2);

console.log(myFunction())
console.log(myFunction())
console.log(myFunction())

// Доработать данную функцию таким образом, чтобы она возвращала объект с функциями

function setCounter(initialValue) {
    let counter = initialValue;
  
    console.log(counter);
  
    function incrementCounter(value) {
      counter += value;
      console.log(counter);
    }
  
    return {
      setValue: function (value) {
        counter = value;
        console.log(counter);
      },
      clear: function () {
        counter = 0;
        console.log(counter);
      },
      getValue: function () {
        console.log(counter);
        return counter;
      },
      increment: incrementCounter
    };
  }
  
  const counter = setCounter(10);
  counter.getValue(); 
  counter.setValue(5); 
  counter.getValue(); 
  counter.clear(); 
  counter.getValue(); 
  counter.increment(3); 
  
  counter.increment(4);  
  