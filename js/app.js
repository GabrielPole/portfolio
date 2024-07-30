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

//botão menu
const btnMobile = document.getElementById('btn_mobile');
const nav = document.getElementById('nav');
const menuItems = nav.querySelectorAll('ul li');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    document.addEventListener('click', closeMenuOnClickOutside);
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  if (!nav.contains(event.target) && !btnMobile.contains(event.target)) {
    closeMenu();
  }
}

function closeMenu() {
  nav.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', 'false');
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
  document.removeEventListener('click', closeMenuOnClickOutside);
}

function handleMenuItemClick(event) {
  closeMenu();
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));
