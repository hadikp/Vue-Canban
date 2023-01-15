<script setup>

</script>

<template>
  <header></header>
  <main>
    <h2>Welcome</h2>
    <div class="board">
      <h3>My Boards</h3>
      <div class="cards-result">
        <div class="card-blue">
          <h3>All my cards</h3>
        </div>
        <div class="card-orange">
          <h3>My cards at risk</h3>
        </div>
        <div class="card-red">
          <h3>My overdue cards</h3>
        </div>
      </div>
    </div>
    
  </main>
  <footer></footer>
  
</template>

<style scoped>
  .board{
    background-color: #fff;
    box-shadow: 5px 5px var(--grey);
    /* border: 1px solid; */
    margin-left: 7rem;
    margin-top: 2rem ;
    min-width: 40vw;
    min-height: 50vh;
    position: relative;
  }

  .cards-result {
    color: #fff;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -9rem;
    position: absolute;
    text-align: center; 
  }

  .card-blue{
    background-color: var(--blue);
    box-shadow: 5px 5px var(--grey);
    height: 7rem;
    width: 15vw;
    margin-right: 2rem;
  }
  
  .card-orange{
    background-color: var(--orange);
    box-shadow: 5px 5px var(--grey);
    height: 7rem;
    width: 15vw;
    margin-right: 2rem;
  }
  .card-red{
    background-color: var(--red);
    box-shadow: 5px 5px var(--grey);
    height: 7rem;
    width: 15vw;
  }
  
  

</style>