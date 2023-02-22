<script>
  import Draggable from 'vuedraggable'
  import { useCardStore } from '../../stores/card'
  import { useSwimlane1CardStore } from '../../stores/swimlane1Card'
  import { ref } from 'vue'



  const cardData = useCardStore()
  const swimlane1CardData = useSwimlane1CardStore()
   /* const swimlaneIdFromBoard = swimlaneId
  const props = defineProps(['swimlaneId'])
 console.log(props.swim) */


  export default {
    props: ['swimlaneId'],
  components: {
    Draggable
  },
  data() {
      return {
        enabled: true,
        list: [
          { user: 'start', desc: cardData.card[0].id}
        ],
        list2: [
          { user: 'start', desc: cardData.card[0].id}
        ],
        list3: [
          { user: 'start', desc: cardData.card[0].id }
        ],
        list4: [
          { user: 'start', desc: cardData.card[0].id }
        ],
        dragging: false,
      }
    },
    methods: {
      addList() {
        const swimlaneCardsArr = swimlane1CardData.swimlane1Card;
        for(let i = 0; i < swimlaneCardsArr.length; i++) {
          if(swimlaneCardsArr[i].colId == 1){
            this.list.push({desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
            openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
          } else if(swimlaneCardsArr[i].colId == 2){
            this.list2.push({desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
            openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
          } else if(swimlaneCardsArr[i].colId == 3){
            this.list3.push({desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
            openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
          } else {
            this.list4.push({desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
            openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
          }
        }
      },
       update(event, element) {
        // console.log(element)
        console.log(this.$refs.change.value)
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
        <draggable class="dragArea list-group" :list="list" ghost-class="ghost-card" group="list" ref="change" item-key="user" @change="update($event, 15)">
          <template #item="{ element }">
            <div class="list-group-item">
              <div v-if="element.user != 'start'"  class="list-group-card">
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
        <h4>Ready to work</h4>
      </header>
      <main class="column-main">
        <draggable class="dragArea list-group" :list="list2" ghost-class="ghost-card" group="list" item-key="user" @change="update($event, 15)">
          <template #item="{ element }">
            <div class="list-group-item">
              <div v-if="element.user != 'start'" class="list-group-card">
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
        <draggable class="dragArea list-group" :list="list3" ghost-class="ghost-card" group="list" item-key="user" @change="update($event, 15)">
          <template #item="{ element }">
            <div class="list-group-item">
              <div v-if="element.user != 'start'" class="list-group-card">
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
        <draggable class="dragArea list-group" :list="list4" ghost-class="ghost-card" group="list" item-key="user" @change="update($event, 15)">
          <template #item="{ element }">
            <div class="list-group-item">
              <div v-if="element.user != 'start'" class="list-group-card">
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
    <div>{{ swimlaneId }}</div>
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
    padding-bottom: 1rem;
    padding-top: 0.5rem;
  }
  .list-group-item{
    margin-top: 0.5rem;
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