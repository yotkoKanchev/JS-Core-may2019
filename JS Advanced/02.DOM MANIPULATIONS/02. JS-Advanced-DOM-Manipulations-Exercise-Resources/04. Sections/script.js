function create(words) {
   let divElement = document.getElementById('content');

   for (let word of words) {
      let currentP = document.createElement('p');
      currentP.textContent = word;
      currentP.style.display = 'none';
      let currentDiv = document.createElement('div');
      currentDiv.appendChild(currentP);

      currentDiv.addEventListener('click', () => {
         currentP.style = 'block';
      });

      divElement.appendChild(currentDiv);
   }
}