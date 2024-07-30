// Portifólio Vue
const vm = new Vue({
    el: "#portifolio",
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
      },
      router(){
        const hash = document.location.hash;
        if(hash){
          this.fetchPost(hash.replace("#post",""))
        }
      }
    },
    watch:{
      post(){
        document.title = this.post.h1 || "G.Pole"
        const hash = this.post.id || ""
        history.pushState(null, null, `#post${hash}`)
      }
    },
    created(){
      this.router()
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

 