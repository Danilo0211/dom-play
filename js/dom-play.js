const spans = document.querySelectorAll("#play span");
      
console.log(spans);

for (const mySpan of spans){
        mySpan.style.backgroundColor ="pink";
        let actor = mySpan.datatset.actor;
        alert(actor);

}