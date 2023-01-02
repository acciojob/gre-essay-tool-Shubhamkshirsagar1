
const textBox = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');


textBox.addEventListener('keyup', function() {
    
    if(textBox.value === ""){
        wordCount.innerText = 0
    }
    else{
        const text = textBox.value.trim().split(" ")

        if(text.length > 0)
          {
            wordCount.innerText = text.length
          }
    }
 
});