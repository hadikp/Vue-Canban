<script>
  import Draggable from 'vuedraggable'
  import { useCardStore } from '../../stores/card'

  const cardData = useCardStore()


  export default {
  components: {
    Draggable
    
  },
  data() {
      return {
        enabled: true,
        list: [
          { user: 'Jancsi', id: 1 },
          { user: 'Kali', id: 2 },
          { user: 'Sanyi', id: 3 },
          { user: 'Pali', id: 4 },
        ],
        list2: [
          { user: 'Vivekananda', id: 5}
        ],
        list3: [
          { user: 'Harold', id: 6},
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
        <draggable class="dragArea list-group" :list="list" ghost-class="ghost-card" group="list" item-key="user">
          <template #item="{ element }">
            <div class="list-group-item">
              <div class="list-group-card">
                {{ element.user }}
                <p>{{ element.id }}</p>
              </div>
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
        <draggable class="dragArea list-group" :list="list2" ghost-class="ghost-card" group="list" item-key="user">
          <template #item="{ element }">
            <div class="list-group-item">
              <div class="list-group-card">
                {{ element.user }}
                <p>{{ element.id }}</p>
              </div>
            </div>
          </template>
      </draggable>
      </main>
    </div>

    <div class="column">
      <header class="column-header">
        <h4>Active</h4>
      </header>
      <main class="column-main">
        <draggable class="dragArea list-group" :list="list3" ghost-class="ghost-card" group="list" item-key="user">
          <template #item="{ element }">
            <div class="list-group-item">
              <div class="list-group-card">
                {{ element.user }}
                <p>{{ element.id }}</p>
              </div>
              
            </div>
          </template>
      </draggable>
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
    margin-right: 2rem;
    width: 18vw;
  }
  .column-header{
    background-color: var(--lightblue);
    color: #fff;
    border-radius: 10px 10px 0 0;
    height: 5vh;
    padding: 0.5rem;
  }
  .column-main{
    background-color: rgba(147, 147, 147, 0.5);
    /* opacity: 40%; */
    position: absolute;
    padding-bottom: 1rem;
  }
  .list-group-item{
    margin-top: 0.5rem;
    position: relative;
    width: 18vw;
  }
  .list-group-card{
    background-color: #fff;
    color: #000;
    margin-left: 1rem;
    width: 13vw;
  }
  .ghost-card{
    opacity: 0.5;
    background: #F7FAFC;
    border: 1px solid #4299e1;
  }
  
  
  
</style>