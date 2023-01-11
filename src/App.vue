<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header></header>
  <main class="main-container">
    <nav class="navigation">
      <ul class="nav-ul">
        <li><router-link class="nav-ul-li" :to="{name: 'welcome'}">Welcome</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'board'}">Board</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'squad'}">Squad</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'user'}">User</router-link></li>
      </ul>
    </nav>
    <router-view />
  
  </main>
  <footer>
    <div class="footer-div">
      &copy; 2023-2024 Hadik-Art, all rights reserved
    </div>
  </footer>
</template>

<style scoped>

.main-container {
    /* display: flex; */
    min-height: 100vh;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    /* position: relative; */
    margin: auto;
  }
.footer-div{
    /* background-color: #bbb; */
    color: orange;
    font-size: 1.5rem;
    position: absolute;
    flex-shrink: 0;
    /* bottom: 0; */
    width: 100%;
    height: 2.5rem; 
    margin-top: 1rem;
    text-align: center; 
}

.navigation {
    font-family: Arial;
    /* position: absolute; */
    top: 20px;
    font-size: 17px;
    text-transform: uppercase;
    /* justify-content: center; 
    align-items: center; */
  }
  .navigation ul li {
    list-style-type: none;
  }
  .nav-ul {
    display: flex;
  }
  .nav-ul-li {
    /* display: flex; */
    color: #fff;
    text-decoration: none;
    /* text-align: center; */
    padding: 15px;
  }


.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
