<script setup>
  import { useSquadStore } from '../../stores/squad'
  import { useSwimlaneStore } from '../../stores/swimlane'
  import { useBoardStore } from '../../stores/board'
  import { useRoute } from 'vue-router'
  import DragAndDrop from '../components/DragAndDrop.vue'
  import { ref } from 'vue'
  
  
  const error = ref('')
  const squadData = useSquadStore()
  const swimlaneData = useSwimlaneStore()
  const boardData = useBoardStore()
  const route = useRoute() 
  let name = ref('')
  name = boardData.board[0].name

  const idFromWelcome = route.params.id; //from welcome boardId

  if(typeof(idFromWelcome) == 'undefined'){
    console.log("A cache is ready, no need to overwrite");
  } else {
    localStorage.setItem('id', idFromWelcome);
  }

  const currentSquadArr = localStorage.getItem('id')-1;

  const swimlaneId = ref('')

</script>

<template>
  <main>
    <div class="board-title">
      <h2>{{ squadData.squad[currentSquadArr].name }}  | Board</h2>
      <div class="board-path">
        <h4>Welcome / Squads / {{ squadData.squad[currentSquadArr].name }} / Board</h4>
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

    <div class="swimlane">
        <div class="swimlane-row">
          <div class="icon-name">
            <font-awesome-icon class="swimlane-icon" icon="chevron-right" />
            <p> {{ swimlaneData.swimlane[0].name }}</p>
          </div>
          <div class="drag-and-drop">
             <DragAndDrop :swimlaneId = swimlaneData.swimlane[0].id /> <!--v-bind:swimlaneId = swimlaneData.swimlane[0].id -->
          </div>
      </div>

        <div class="swimlane-row">
          <div class="icon-name">
            <font-awesome-icon class="swimlane-icon" icon="chevron-right" />
            <p>{{ swimlaneData.swimlane[1].name }}</p>
          </div>
          <div class="drag-and-drop">
            <DragAndDrop :swimlaneId = swimlaneData.swimlane[1].id /> <!--v-bind:swimlaneId = swimlaneData.swimlane[1].id -->
          </div>
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
  
  margin-top: 2rem;
}
.icon-name{
  display: flex;
  align-items: center;
}
.swimlane-icon{
  margin-right: 0.5rem;
}
.drag-and-drop{
  /* margin-top: -10rem; */
  margin-left: 2rem;
}
</style>