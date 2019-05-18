function solve() {
  let text = document.getElementById('input').textContent;
  let output = document.getElementById('output');
  let sentencesArray = text.split('.').filter(x=>x);

  for (let i = 0; i < sentencesArray.length; i += 3) {
    let p = document.createElement('p');

    for (let j = 0; j < 3; j++) {
      p.textContent += sentencesArray[i + j] + '.';
    }
    
    output.appendChild(p);
    console.log(text);
  }
}