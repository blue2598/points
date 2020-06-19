function getRandom(m, n) {
    var num1 = Math.random() * (n - m) + m
    return num1
}
$('document').ready(function() {
    for (var i = 0; i <= 30; i++) {
        console.log(getRandom(-5, 5))
    }
})