function myFunction() {
    var x = document.getElementById("myTextarea").value;
  // console.log(x.length);

     
   var input_char=document.getElementById('input_char');
   console.log(input_char.value);
  //  input_char=input_char.trim();
   let sentence=x.trim();
   if(sentence==""){
    window.alert("Please enter a sentence..")
   }
   if(input_char.value.trim()==""){
    window.alert('please Enter character ..')
   }
//    console.log(sentence.length);
let result="";
let sucess;
for(let i=0;i<=sentence.length;i++){
    if(input_char.value.trim()==sentence[i]){
      result=sentence.slice(i+1,sentence.length);
      sucess=true;
      break;
    }
}

if(sucess!=true){
  result="No character found in the string";
}

  var output=document.getElementById('output');

  output.innerText=result;
}