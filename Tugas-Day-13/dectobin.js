function desimalKeBiner(a) {
    var output = ""
    while (a >= 1) {
        output += a % 2
        a /= 2
    }
    var biner = ""
    for (a = output.length; a >= 0; a--) {
        biner += output.substring(a - 1, a)
    }
    return biner
    return output
}
console.log(desimalKeBiner(4))