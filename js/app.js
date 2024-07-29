// Portifólio Vue
const vm = new Vue({
    el: "#posts",
    data: {
       posts: {},
       post: false
    },
    methods: {
      puxarCursos() {
        fetch("https://gabrielpole.github.io/portifolio/api/posts.json")
         .then(r => r.json())
         .then(r => {
           this.posts = r;
           console.log(r)
        })
      },
      fetchPost(id){
       fetch(`https://gabrielpole.github.io/portifolio/api/posts/post${id}/post.json`)
         .then(r => r.json())
         .then(r =>{
           this.post = r
         })
      } 
    },
    created(){
      this.puxarCursos()
      this.fetchPost()
    }
  });

 //Ver mais experiência
 document.querySelectorAll(".ver_mais").forEach(function(botao) {
   botao.addEventListener("click", function() {
     this.parentElement.classList.add("quero_ver");
   });
 });

 