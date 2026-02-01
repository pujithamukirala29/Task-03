document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("quizform").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("formMsg");
    if(name === "" || email === ""){
      msg.textContent = "All fields are required!";
      msg.style.color = "red";
    } else {
      msg.textContent = "Form submitted successfully!";
      msg.style.color = "pink";
    }
  });
});
document.getElementById("question").textContent =
'1.what is correct syntax to output "Hello World" in python?';

function checkAnswer(ans){
  document.getElementById("quizResult").textContent =
    ans === "a" ?  "Wrong Answer": "Correct!";

}
document.getElementById("Text").textContent =
"2.How do you insert COMMENTS in python code?";
function checkAnswer(ans){
  document.getElementById("result").textContent =
    ans === "b" ?  "Wrong Answer": "Correct!";
}
function getJoke(){
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent =
        data.setup + " - " + data.punchline;
    });
  }
function filterProducts(type){
  let items = document.querySelectorAll(".product");
  items.forEach(item => {
    item.style.display =
      type === "all" || item.dataset.price === type
      ? "block"
      : "none";
  });
}