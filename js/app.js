// Só o básico para fazer funcionar ;)
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
        .catch(error => console.error("Ops! Algo deu errado 🙈", error));
    },
    fetchPost(id) {
      fetch(`https://gabrielpole.github.io/portifolio/api/posts/post${id}/post.json`)
        .then(r => r.json())
        .then(r => {
          this.post = r;
          console.log(r)
        })
        .catch(error => console.error("Ops! Algo deu errado 🙊", error));
    },
    router() {
      const hash = document.location.hash;
      if (hash) {
        this.fetchPost(hash.replace("#post", ""));
      }
    }
  },
  watch: {
    post(newPost) {
      document.title = newPost.h1 || "G.Pole";
      const hash = newPost.id ? `#post${newPost.id}` : "";
      history.pushState(null, null, hash);
    }
  },
  created() {
    this.router();
    this.puxarCursos();
  }
});

// ver mais experiência
document.querySelectorAll(".ver_mais").forEach(function(botao) {
  botao.addEventListener("click", function() {
    this.parentElement.classList.add("quero_ver");
  });
});

// botão menu
const btnMobile = document.getElementById('btn_mobile');
const nav = document.getElementById('nav');

if (btnMobile && nav) {
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

  function handleMenuItemClick() {
    closeMenu();
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
  menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));
}

console.log("Opa! Tudo certo? Utilizei Vue em dev para agilizar o desenvolvimento, mas já estou trabalhando na configuração do CLI em Next.js para continuar a evolução da aplicação. Por isso, não otimizarei tanto por aqui.")
