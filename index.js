function myFunction() {
    var x = document.getElementById("myTextarea").value;
  console.log(x.length);

   var input_char=document.getElementById('input_char');
   console.log(input_char.value);

   let sentence=x.trim();

//    console.log(sentence.length);
let result="";

for(let i=0;i<=sentence.length;i++){
    if(input_char.value==sentence[i]){
      result=sentence.slice(i+1,sentence.length);
      break;
    }
}

  var output=document.getElementById('output');

  output.innerText=result;
}