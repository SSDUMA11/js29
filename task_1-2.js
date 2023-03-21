function count(expression){
    function getValues(expression){
        let values = [...expression]
        return values;
    }
        let values = getValues(expression);
        switch (values[1]) {
            case '+':
            return  showResult(sum(values));
            case '-':
            return  showResult(subtract(values));
            case '*':
            return  showResult(multiply(values));
            case '/':
                try {
                    return showResult(divide(values));
                } catch (error) {
                    console.log(error);
                    return 0;
                }
        }
        function showResult(value){
            return value
        }
    }
    function sum(values) {
            return +values[0] + +values[2];
        }
    function subtract(values) {
        return values[0] - values[2];
    }
    function multiply(values) {
        return values[0] * values[2];
    }
    function divide(values) {
        if (values[2] === '0' || values[0] === '0') {
            throw new Error("Can't divide by 0");
        }
        return values[0] / values[2];   
    }

console.log(count('5+2')); 
console.log(count('6/0')); 