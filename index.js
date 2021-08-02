// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for (let i = 0; i<sourceArray.length; i++) {
      let newValue = sourceArray[i] * -1
      newArray.push(newValue)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i<sourceArray.length; i++) {
      let newValue = sourceArray[i]
      newArray.push(newValue)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i<sourceArray.length; i++) {
      let newValue = sourceArray[i]
      newArray.push(newValue)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let i = 0; i<sourceArray.length; i++) {
      let newValue = sourceArray[i] * 2
      newArray.push(newValue)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (let i = 0; i<sourceArray.length; i++) {
      let newValue = sourceArray[i] * sourceArray[i]
      newArray.push(newValue)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i<sourceArray.length; i++) {
      let newTotal = total + sourceArray[i] 
      total = newTotal
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i<sourceArray.length; i++) {
      if (!sourceArray[i]) {
      return false}
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i<sourceArray.length; i++) {
      if (sourceArray[i]) {
      return true}
    }
    return false
}