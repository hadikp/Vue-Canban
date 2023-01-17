<script setup>

</script>

<template>
  <header></header>
  <main>
    <h2>Welcome</h2>
    <div class="board">
      <header class="board-header">
        <h3 class="board-header-h3">My Boards</h3>
        <div class="board-header-icons">
          <font-awesome-icon class="board-header-icon" icon="sort-amount-down" />
          <font-awesome-icon class="board-header-icon" icon="upload" />
          <font-awesome-icon class="board-header-icon-b" icon="plus" />
          <font-awesome-icon class="board-header-icon-b" icon="user-plus" />
        </div>
      </header>
      
      <div class="board-squads">
        <div class="board-squad-div-active">
          <font-awesome-icon class="board-icon-active" icon="thumbtack" />
          <h3>First squad</h3>
        </div>
        <div class="board-squad-div">
          <font-awesome-icon class="board-icon" icon="thumbtack" />
          <h3>My test squad</h3>
        </div>
      </div>

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

  main h2{
    margin: 2rem;
  }
  .board{
    background-color: #fff;
    box-shadow: 5px 5px var(--grey);
    /* border: 1px solid; */
    margin-left: 8rem;
    margin-top: 2rem ;
    min-width: 40vw;
    min-height: 50vh;
    position: relative;
  }

  .board-header{
    display: flex;
  }

  .board-header-h3{
    margin-left: 2rem;
    margin-top: 0.5rem;
  }

  .board-header-icons{
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30vw;
  }

  .board-header-icon{
    margin-right: 0.6rem;
  }

  .board-header-icon-b{
    background-color: var(--green);
    margin-right: 0.6rem;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
  }

  .board-squads{
    margin: 2rem;
  }

  .board-squad-div-active{
    display: flex;
    color: #000;
    align-items: center;
  }

  .board-squad-div{
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }

  .board-icon-active{
    background-color: var(--green);
    margin-right: 0.6rem;
    color: #fff;
    font-size: 1.1rem;
    padding: 0.7rem;
  }

  .board-header-icon-b{
    background-color: var(--green);
    margin-right: 0.6rem;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
  }

  .board-icon{
    border: 2px solid;
    margin-right: 0.6rem;
    color: #000;
    font-size: 1rem;
    padding: 0.7rem;
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

  .card-blue, .card-orange, .card-red{
    background-color: var(--blue);
    box-shadow: 5px 5px var(--grey);
    height: 7rem;
    width: 15vw;
  }

  .card-blue{
    margin-right: 2rem;
  }

  .card-blue h3, .card-orange h3, .card-red h3{
    margin-top: 1rem;
  }
  
  .card-orange{
    background-color: var(--orange);
    margin-right: 2rem;
  }
  .card-red{
    background-color: var(--red);
  }

</style>