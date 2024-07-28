 //MODAL DE POST 
 const modal =  document.querySelector("dialog");
 const button_close = document.querySelector("dialog button");
 const button = document.querySelectorAll("div.info_modal").forEach(function(open){
   open.addEventListener("click", function() {
     modal.showModal();
   });
 });
 button_close.onclick = function(){
   modal.close()
 }
 //Ver mais experiência
 document.querySelectorAll(".ver_mais").forEach(function(botao) {
   botao.addEventListener("click", function() {
     this.parentElement.classList.add("quero_ver");
   });
 });
 // Portifólio Vue
 const vm = new Vue({
     el: "#posts",
     data: {
       posts: {}
     },
     methods: {
       puxarCursos() {
         fetch("https://gabrielpole.github.io/VueOrigmaid/post.json")
         .then(r => r.json())
         .then(r => {
           this.posts = r;
         })
       }
     },
     created(){
       this.puxarCursos()
     }
   });