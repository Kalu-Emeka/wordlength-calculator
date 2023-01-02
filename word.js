let calculateWord = document.getElementById("calculate");
let wordNumber = document.getElementById("number");
const wordCalculation = () => {
    calculateWord.addEventListener("click", () => {
        let words = document.getElementById("input").value; 
        if(words.length == "") {
            wordNumber.innerHTML = 0;
            
        }else {
            wordNumber.innerHTML = words.length;

        }
    })
}
wordCalculation();  