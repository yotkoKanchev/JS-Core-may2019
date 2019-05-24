function solve(array) {
    array.sort(function (a, b) {
        return a.length - b.length ||
            a.localeCompare(b)
    });

    console.log(array.join('\n'));
}

solve(['alpha',
    'beta',
    'gamma']
);