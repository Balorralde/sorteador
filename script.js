
function generateNumber() {
   // Obtém os valores dos inputs
   const min =Math.ceil(document.querySelector('.input-min').value);

   const max =Math.floor(document.querySelector('.input-max').value);

   const resultParagraph = document.querySelector("p");

   // Verifica se os valores são válidos
   if (isNaN(min) || isNaN(max) || min >= max) {
    resultParagraph.classList.add("error-message");
    resultParagraph.textContent = "Números Inválidos.";
       return;
   }

   // Gera um número aleatório entre min e max
   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

   // Exibe o número sorteado no parágrafo
   resultParagraph.textContent =  (randomNumber);
   resultParagraph.classList.remove("error-message");
}