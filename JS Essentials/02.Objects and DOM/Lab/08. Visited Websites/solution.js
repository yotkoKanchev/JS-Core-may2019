function solve() {
  let siteElements = Array.from(document.getElementsByClassName('link-1'));

  for (const element of siteElements) {
    element.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget;

      let pElement = currentTarget.getElementsByTagName('p')[0];
      let text = pElement.textContent;

      let textParts = text.split(' ');
      let clicks = Number(textParts[1]) + 1;

      textParts[1] = clicks;
      pElement.textContent = textParts.join(' ');
    })    
  }
}