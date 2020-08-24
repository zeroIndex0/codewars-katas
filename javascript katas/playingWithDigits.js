/*
//This was the python code that i submitted for the algo earlier

def dig_pow(n, p):
    increasing_pow = p
    num_list = list(str(n))
    result = 0
    for num in num_list:
        result += pow(int(num), increasing_pow)
        increasing_pow += 1

    if result % n == 0:
        for i in range(1, result):
            if i * n == result:
                return i
    return -1
    */



function digPow(n, p) {
    increasingPow = p;
    numList = n.toString().split("");
    result = 0;

    numList.forEach(element => {
        result += Math.pow(Number(element), increasingPow);
        increasingPow += 1;
    });

    if(result % n === 0) {
        for(let i = 0; i < result; i++) {
            if( i * n === result) {
                return i;
            }
        }
    }
    return -1;
}

console.log(digPow(92, 1));
