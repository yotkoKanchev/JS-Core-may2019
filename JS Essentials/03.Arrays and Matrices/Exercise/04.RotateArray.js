function solve(array) {

    let rotations = Number(array.pop());
    rotations = rotations % array.length;

    for (let i = 0; i < rotations % array.length; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}
