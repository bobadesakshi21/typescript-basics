const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement
const buttonElement = document.querySelector('button')!

const numResults: number[] = []
const textResults: string[] = []

function add(num1: number | string, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2
    }
    return +num1 + +num2
}

function printResult(resutObj: { val: number; timeStamp: Date }) {
    console.log(resutObj.val)
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value
    const num2 = num2Element.value

    const result1 = add(+num1, +num2)
    numResults.push(result1 as number)

    const result2 = add(num1, num2)
    textResults.push(result2 as string)

    console.log("RESULT1: ", result1)
    console.log("RESULT2: ", result2)
    console.log(numResults, textResults)

    printResult({ val: result1 as number, timeStamp: new Date() })
})

