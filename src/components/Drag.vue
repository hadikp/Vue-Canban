<script>
  import Draggable from 'vuedraggable'

  export default {
  components: {
    Draggable
  },
  data() {
      return {
        enabled: true,
        list: [
          { name: 'John', id: 1 },
          { name: 'Jane', id: 2 },
          { name: 'Philipp', id: 3 },
          { name: 'Gerard', id: 4 },
        ],
        dragging: false,
      }
    }
};
</script>

<template>
  <div class="container">
    <div class="column">
      <header class="column-header">
        <h4>Backlog</h4>
      </header>
      <main class="column-main">
        <draggable
        class="dragArea list-group"
        :list="list"
        item-key="name">
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
      </main> 
    </div>

    <div class="column">
      <header class="column-header">
        <h4>Ready to work</h4>
      </header>
      <main class="column-main">
      
      </main>
    </div>

    <div class="column">
      <header class="column-header">
        <h4>Active</h4>
      </header>
      <main class="column-main">
        
      </main>
    </div>

    <div class="column">
      <header class="column-header">
        <h4>Closed</h4>
      </header>
      <main class="column-main">
      
      </main>
    </div>
  </div>

</template>

<style scoped>
  .container{
    display: flex;
  }
  .column{
    color: #fff;
    margin-right: 2rem;
    width: 18vw;
    
  }
  .column-header{
    background-color: var(--lightblue);
    border-radius: 10px 10px 0 0;
    height: 5vh;
    padding: 0.5rem;
  }
  .column-main{
    background-color: var(--grey);
    height: 25vh;
    opacity: 40%;
  }
</style>