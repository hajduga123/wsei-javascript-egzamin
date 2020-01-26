function bigestSumOfTwoElements(array) {
    if (array.length == 0)
        return false;

    let lastMax = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > lastMax)
            lastMax = array[i];
    }

    // znaleziona liczba największa
    let fMax = lastMax;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == fMax)
            array[i] = 0;
    }

    // szukamy drugą liczbę maksymalną
    lastMax = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > lastMax)
            lastMax = array[i];
    }
    return fMax+lastMax;
}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));