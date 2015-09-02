function randomNum() {
    var random = Math.floor((Math.random() * 1000000) + 100);
    return random;
}

console.log(randomNum());


function formatDollar(num) {
    var p = num.toFixed(2).split(".");
    return ["$", p[0].split("").reverse().reduce(function(acc, num, i) {
        return num + (i && !(i % 3) ? "," : "") + acc;
    }, "."), p[1]].join("");
}

console.log(formatDollar(1758984647));

