let findFibonacciIndex  = (n) =>
{
    if(n < 0)
        return "invalid input"

    if (n <= 1)
        return n;
        
    let a = 0, b = 1, c = 1;
    let res = 1;
    while (c < n)
    {
        c = a + b;
        res++;
        a = b;
        b = c;
    }
    return res;
}
console.log(findFibonacciIndex(-1));

