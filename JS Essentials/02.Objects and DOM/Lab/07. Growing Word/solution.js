function growingWord() {
    let p = document.querySelector('#exercise p');
    let pixels = Number(p.style.fontSize.slice(0, -2)) * 2 || 2;

    if (p.style.color === 'red') {
      p.style.color = 'blue';
    } else if (p.style.color === 'blue') {
      p.style.color = 'green';
    } else if (p.style.color === 'green') {
      p.style.color = 'red';
    } else {
      p.style.color = 'blue';
    }

    p.style.fontSize = `${pixels}px`;
}