<script>
  import Draggable from 'vuedraggable'
  import { useCardStore } from '../../stores/card'
  import Card from './Card.vue'


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
        ],
        list2: [
          { desc: cardData.card[0].description, openWeek: cardData.card[0].cardExistTime.existInWeek,
            openDay: cardData.card[0].cardExistTime.remainDays}
        ],
        list3: [
          { desc: cardData.card[0].description, openWeek: cardData.card[0].cardExistTime.existInWeek,
            openDay: cardData.card[0].cardExistTime.remainDays }
        ],
        list4: [
          { desc: cardData.card[0].description, openWeek: cardData.card[0].cardExistTime.existInWeek,
            openDay: cardData.card[0].cardExistTime.remainDays }
        ],
        dragging: false,
      }
    },
    methods: {
      addList() {
        for(let i = 0; i < cardData.card.length; i++) {
          this.list4.push({desc: cardData.card[i].description, openWeek: cardData.card[i].cardExistTime.existInWeek,
            openDay: cardData.card[i].cardExistTime.remainDays})
        }
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
                <font-awesome-icon  icon="address-book" />
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
                <font-awesome-icon  icon="address-book" />
                <p>{{ element.user }}</p>
                <p>{{ element.desc }}</p>
                <p>create: {{ element.openWeek }} w {{ element.openDay }} d</p>
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
                <font-awesome-icon  icon="address-book" />
                <p>{{ element.user }}</p>
                <p>{{ element.desc }}</p>
                <p>create: {{ element.openWeek }} w {{ element.openDay }} d</p>
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
        <draggable class="dragArea list-group" :list="list4" ghost-class="ghost-card" group="list" item-key="user">
          <template #item="{ element }">
            <div class="list-group-item">
              <div class="list-group-card">
                <font-awesome-icon  icon="address-book" />
                <p>{{ element.user }}</p>
                <p>{{ element.desc }}</p>
                <p>create: {{ element.openWeek }} w {{ element.openDay }} d</p>
              </div>
              
            </div>
          </template>
      </draggable>
      </main>
    </div>
    <button class="button" @click="addList()">click me</button>
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
    min-height: 10vh;
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
    padding: 0.5rem;
    width: 13vw;
  }
  .ghost-card{
    opacity: 0.5;
    background: #F7FAFC;
    border: 1px solid #4299e1;
  }


  
  
  
</style>