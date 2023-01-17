<script setup>

</script>

<template>
  <main>
    <div class="board-title">
      <h2>First squad | Board</h2>
      <div class="board-path">
        <h4>Welcome / Squads / First squad / Board</h4>
      </div>
    </div>

    <div class="search">

      <div class="search-icons-left">
        <div class="search-icon">
        <font-awesome-icon class="search-icon-icon" icon="filter" />
        <h4>Filters</h4>
        </div>
        <div class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="rotate" />
          <h4>On</h4>
        </div>
        <div class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="download" />
          <font-awesome-icon icon="caret-down" />
        </div>
        <div class="search-icon">
          <font-awesome-icon icon="upload" />
        </div>
        <div class="search-icon">
          <font-awesome-icon class="handshake" icon="handshake" />
        </div>
      </div>

      <div class="search-input">
        <input type="text" placeholder="Quick search">
      </div>

      <div class="search-icons-right">
        <div class="search-icon">
          <font-awesome-icon icon="thumbtack" />
        </div>
        <div class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="edit" />
          <h4>Edit</h4>
        </div>
        <div class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="magic-wand-sparkles" />
        </div>
        <button class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="plus" />
          <h4>New card</h4>
        </button>
      </div>

    </div>
    
  </main>
  
</template>

<style scoped>
  .board-title{
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
  }
  .board-path{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 73vw;
  }
  .search{
    margin: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .search-icon{
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    padding: 0.3rem;
  }
  .search-icon-icon {
    margin-right: 0.5rem;
  }
.search-input{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }
  .search-input input{
    height: 2rem;
    padding: 0.5rem;
    width: 20vw;
  }

.search-icons-left{
  display: flex;
}
.search-icons-right{
  display: flex;
  justify-content: flex-end;
  width: 30vw;
}
</style>