
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");


textbox.addEventListener("input", function() {

  const count = this.value.split(" ").length;

  wordCount.innerHTML = count;
});
