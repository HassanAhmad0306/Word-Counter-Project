let textarea=document.getElementById("textbox");
let word=document.getElementById("word");
let character=document.getElementById("char2");
word.style.color="yellow";
character.style.color="yellow";

textarea.addEventListener('input',function(){
// Characters Count
    let string=this.value;
    let char=string.length;
    character.innerHTML=char;
    character.style.color="yellow";

// Words Count
    string=string.trim();
    let words=string.split(" ");
    let cleanString=words.filter(function(element){
        return element !="";
    });
    word.innerText=cleanString.length;
    word.style.color="yellow";
})

