<script setup>
  import axios from 'redaxios'
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useSquadStore } from '../../stores/squad'
  import { useSwimlaneStore } from '../../stores/swimlane'
  import { useSwimlane1CardStore } from '../../stores/swimlane1Card'
  import { useSwimlane2CardStore } from '../../stores/swimlane2Card'
  import { useBoardStore } from '../../stores/board'
  import { RouterLink } from 'vue-router';

  const error = ref('')
  const squadData = useSquadStore()
  const swimlaneData = useSwimlaneStore()
  const swimlane1CardData = useSwimlane1CardStore()
  const { activeCard } = storeToRefs(useSwimlane1CardStore()) 
  const swimlane2CardData = useSwimlane2CardStore()
  const boardData = useBoardStore()

  //multiple axios and put pinia store
  let urls = [
    'http://localhost:8080/api/squad',
    'http://localhost:8080/api/swimlane',
    'http://localhost:8080/api/card/swimlane/1',
    'http://localhost:8080/api/card/swimlane/2',
    'http://localhost:8080/api/board'
  ]
  const requests = urls.map(url => axios.get(url))

  axios.all(requests).then(axios.spread((squadDatas, swimlaneDatas, swimlane1Card, swimlane2Card, boardDatas) => {
    const squadArr = squadDatas.data
    const swimlaneArr = swimlaneDatas.data
    const swimlane1CardArr = swimlane1Card.data
    // const active1CardArr = active1Cards.data
    const swimlane2CardArr = swimlane2Card.data
    const boardArr = boardDatas.data
    
    squadData.squad = squadArr
    swimlaneData.swimlane = swimlaneArr
    swimlane1CardData.swimlane1Card = swimlane1CardArr
    // activeCard = active1CardArr
    swimlane2CardData.swimlane2Card = swimlane2CardArr
    boardData.board = boardArr
  }))
   .catch(err => (error.value = 'Something wrong with datas, try again!'))

   

  
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
      
      <div class="board-squads" v-for="squad in squadData.squad" :key="squad.id">
        <div :class="squad.id == 1 ? 'board-squad-div-active' : 'board-squad-div'">
          <font-awesome-icon :class="squad.id == 1 ? 'board-icon-active' : 'board-icon'" icon="thumbtack" />
          <router-link class="board-squads-router" :to="{name: 'board', params: {id: squad.boardId}}"><h3>{{ squad.name }}</h3></router-link>
          <!-- :to="`/board/${squad.boardId}`"> -->
        </div>
        
        <!-- <div class="board-squad-div">
          <font-awesome-icon class="board-icon" icon="thumbtack" />
          <h3>{{ squad.name }}</h3>
        </div> -->
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
  .board-icon, .board-icon-active{
    margin-right: 0.6rem;
    color: #fff;
    font-size: 1.1rem;
    padding: 0.7rem;
  }
  .board-icon{
    border: 2px solid;
    color: #000;
    font-size: 1rem;
  }
  .board-icon-active{
    background-color: var(--green);
  }
  .board-icon-active:hover{
    border: 2px solid #000;
    background-color: #fff;
    color: var(--green);
  }
  .board-icon:hover{
    background-color: #000;
    color: #fff;
  }
  .board-squads-router{
    text-decoration: none;
    color: #000;
  }
  .board-header-icon-b{
    background-color: var(--green);
    margin-right: 0.6rem;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
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