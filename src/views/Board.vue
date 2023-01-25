<script setup>
  import { ref } from 'vue'
  import { useSquadStore } from '../../stores/squad'
  import { useSwimlaneStore } from '../../stores/swimlane'
  import { useBoardStore } from '../../stores/board'
  import { useRoute } from 'vue-router'
  import Drag from '../components/Drag.vue'
  import Card from '../components/Card.vue'
  import Card2 from '../components/Card2.vue'

  const error = ref('')
  const squadData = useSquadStore()
  const swimlaneData = useSwimlaneStore()
  const boardData = useBoardStore()
  const route = useRoute() 
  const id = route.params.id; //from welcome boardId


</script>

<template>
  <main>
    <div class="board-title">
      <h2>{{ squadData.squad[id-1].name }}  | Board</h2>
      <div class="board-path">
        <h4>Welcome / Squads / {{ squadData.squad[id-1].name }} / Board</h4>
      </div>
    </div>

    <div class="search">

      <div class="search-icons-left">
        <button class="search-icon">
        <font-awesome-icon class="search-icon-icon" icon="filter" />
        <h4>Filters</h4>
        </button>
        <button class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="rotate" />
          <h4>On</h4>
        </button>
        <button class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="download" />
          <font-awesome-icon icon="caret-down" />
        </button>
        <button class="search-icon">
          <font-awesome-icon icon="upload" />
        </button>
        <button class="search-icon">
          <font-awesome-icon class="handshake" icon="handshake" />
        </button>
      </div>

      <div class="search-input">
        <input type="text" placeholder="Quick search">
      </div>

      <div class="search-icons-right">
        <button class="search-icon-thumb">
          <font-awesome-icon icon="thumbtack" />
        </button>
        <button class="search-icon">
          <font-awesome-icon class="search-icon-icon" icon="edit" />
          <h4>Edit</h4>
        </button>
        <button class="search-icon-magic">
          <font-awesome-icon icon="magic-wand-sparkles" />
        </button>
        <button class="search-icon-plus">
          <font-awesome-icon class="search-icon-icon" icon="plus" />
          <h4>New card</h4>
        </button>
      </div>
    </div>

    <div class="swimlane" v-for="swimlane in swimlaneData.swimlane" :key="swimlane.id">
      <div class="swimlane-row">
        <font-awesome-icon class="swimlane-icon" icon="chevron-right" />
        <p>{{ swimlane.name }}</p>
      </div>
    </div>

    <div class="drag-and-drop">
      <Drag />
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
  .search-icon, .search-icon-thumb, .search-icon-magic, .search-icon-plus{
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    padding: 0.3rem;
  }
  .search-icon-thumb{
    padding: 0.5rem;
  }
  .search-icon-magic, .search-icon-plus{
    background-color: var(--green);
    color: #fff;
  }
  .search-icon-magic:hover, .search-icon-plus:hover{
    background-color: #fff;
    color: var(--green);
  }
  .search-icon-icon{
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
.swimlane{
  margin-left: 2rem;
}
.swimlane-row{
  display: flex;
  align-items: center;
  margin-top: 2rem;
}
.swimlane-icon{
  margin-right: 0.5rem;
}
.drag-and-drop{
  margin-left: 2rem;
}
</style>