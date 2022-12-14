let arr = [[1, 3], [true, "5"]];

let flattern = (arr) => {
    return arr.reduce((acc, current) => {
        return acc.concat(Array.isArray(current) ? flattern(current) : current)
    }, [])
}

console.log(flattern(arr))