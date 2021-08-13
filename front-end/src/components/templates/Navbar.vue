<template>
<header id="header">
  <a id="logo" href="../../views/home.vue">
  <img src="../../assets/logo.svg">
  </a>
<nav id="navbar" style="background-color: #f57f52;">
  <button id="navbar-toggler" v-on:click.capture="toggleMenu">
    <span class="navbar-toggler-icon">MENU</span>
  </button>
  <ul id="menu">
    <li>Serviços</li>
    <li>Emergência</li>
    <li>Notificações</li>
    <li>Perfil</li>
  </ul>
</nav>
</header>
</template>

<script lang = "ts">
const btnwraper = document.getElementById('navbar-toggler');

 

export default {
    name: "Navbar",
    
    methods: {
      toggleMenu: function(){
      const nav = document.getElementById('navbar');
      nav.classList.toggle('active');
    
}
    }
       }
</script>

<style lang="scss">
#header{
  box-sizing: border-box;
  height: 50px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#logo > img{
  height: 45px;

}

#menu{
  display: block;
  padding: 1rem;
  list-style: none;
  gap: .5rem;
}

@media (max-width: 700px) {


  .navbar-toggler{
    display: block;
    max-height: 80px;
    padding: 8px;
  }

  #menu{
    display: none;
  }
  #navbar.active #menu{
    display: flex;

  }
}
</style>