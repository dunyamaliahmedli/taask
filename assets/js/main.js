// let btns = document.querySelectorAll(".btn");

// [...btns].forEach(btn=>{
//   btn.onclick = function(){
//     [...this.parentElement.children].forEach(elem=>{
//       elem.style.opacity=1;
//     });
//     this.style.opacity=0;
//   }
// });

let img  = document.querySelectorAll('img');

let showpokemon = function(){
  let src="";
  return x =>{
    if(x<6){
     src= x;
    }
    else{
      src=x;
    }
    img.setAttribute("src",'assets/img/img${src}.png');
  }
}()
pokemons.onclick = function(){
  showpokemon(this.getAttribute('next-number'));
  this.setAttribute('next-number',Number(this.getAttribute("next-number"))+1)
}