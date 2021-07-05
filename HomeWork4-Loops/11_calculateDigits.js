function calculate(numbers) {
    let res = String(numbers);
    let sumRes = 0;
    let prodRes = 1;
    let resoult = '';
    for (let i = 0; i < res.length; i++) {
        sumRes += Number(res[i])
        prodRes *= Number(res[i])
    }
    if (numbers === 0) {
        resoult = 'Cannot calculate';
        console.log(resoult);

    }
    else if (prodRes % sumRes !== 0) {
        resoult = prodRes % sumRes;
        console.log(`Remainder is ${resoult}`);
    }
    else if (prodRes % sumRes === 0) {
        resoult = prodRes / sumRes;
        console.log(`Quotient is ${resoult}`);
    }

}

calculate(1233)
