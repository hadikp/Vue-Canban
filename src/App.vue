<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="header-logo">
      <img class="header-img" src="./assets/canban_logo.png" alt="canban-logo">
      <h2>BlueSight</h2>
    </div>
  </header>
  <main class="main-container">
    <nav class="navigation">
      <ul class="nav-ul">
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="home-lg" />
          <li><router-link class="nav-ul-li" :to="{name: 'welcome'}">Welcome</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="th" />
          <li><router-link class="nav-ul-li" :to="{name: 'board'}">Board</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="user-group" />
          <li><router-link class="nav-ul-li" :to="{name: 'squad'}">Squad</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="user-astronaut" />
          <li><router-link class="nav-ul-li" :to="{name: 'user'}">User</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="fa-regular fa-calendar-check" />
          <li><router-link class="nav-ul-li" :to="{name: 'project'}">Project</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="font-awesome-flag" />
          <li><router-link class="nav-ul-li" :to="{name: 'icons'}">Icons</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="fa-regular fa-calendar-check" />
          <li><router-link class="nav-ul-li" :to="{name: 'project'}">Project</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="fa-regular fa-calendar-check" />
          <li><router-link class="nav-ul-li" :to="{name: 'project'}">Project</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="fa-regular fa-calendar-check" />
          <li><router-link class="nav-ul-li" :to="{name: 'project'}">Project</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="fa-regular fa-calendar-check" />
          <li><router-link class="nav-ul-li" :to="{name: 'project'}">Project</router-link></li>
        </div>
        <div class="nav-ul-li-div">
          <font-awesome-icon class="nav-icon" icon="fa-regular fa-calendar-check" />
          <li><router-link class="nav-ul-li" :to="{name: 'project'}">Project</router-link></li>
        </div>
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

header {
  background-color: #fff;
  width: 100vw;
}
.header-logo{
  display: flex;
  align-items: center;
  font-family: GreatVibes;
  font-size: 1rem;
  /* font-weight: bold; */
}
.header-img {
  height: 4rem;
  padding: 0.5em;
  /* will-change: filter; */
}

.main-container {
    min-height: 100vh;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    background-image: url(./assets/feher_hatter.png);
    background-size: cover;
    display: flex;
  }

.footer-div{
    /* background-color: #bbb; */
    color: orange;
    font-size: 1.5rem;
    position: absolute;
    flex-shrink: 0;
    bottom: 0;
    width: 100%;
    height: 2.5rem; 
    margin-top: 1rem;
    text-align: center; 
}

.navigation {
    font-family: Arial;
    display: flex;
    font-size: 1rem;
    text-transform: uppercase;
    justify-content: flex-start; 
    align-items: center;
  }

  .nav-ul {
    background-color: var(--bluegrey);
    opacity: 65%;
    padding: 1rem;
  }
  .nav-ul-li {
    /* display: flex; */
    color: #fff;
    text-decoration: none;
    list-style-type: none;
    /* text-align: center; */
    /* padding: 15px; */
  }

  .nav-ul-li-div {
    display: flex;
    color: #fff;
    padding: 1rem;
  }

  .nav-icon {
    margin-right: 0.6rem;
  }


.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
