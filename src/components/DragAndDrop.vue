<script>
  import Draggable from 'vuedraggable'
  import { useCardStore } from '../../stores/card'
  import { useSwimlane1CardStore } from '../../stores/swimlane1Card'
  import { useSwimlane2CardStore } from '../../stores/swimlane2Card'
  import { ref, watch } from 'vue'
  import axios from 'redaxios'

  const cardData = useCardStore()
  const swimlane1CardData = useSwimlane1CardStore()
  const swimlane2CardData = useSwimlane2CardStore()



  export default {
    props: ['swimlaneId'],
  components: {
    Draggable
  },
  data() {
      return {
        enabled: true,
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        dragging: false,
      }
    },
    computed: {
      list1_length() {
        return this.list1.length
      },
      list2_length() {
        return this.list2.length
      },
      list3_length() {
        return this.list3.length
      },
      list4_length() {
        return this.list4.length
      }
    },
    watch: {
      list1_length(newVal, oldVal){
        if(newVal > oldVal) {
          this.list1Monitor()
        }
      },
      list2_length(newVal, oldVal){
        if(newVal > oldVal) {
          this.list2Monitor()
        }
      },
      list3_length(newVal, oldVal){
        if(newVal > oldVal) {
          this.list3Monitor()
        }
      },
      list4_length(newVal, oldVal){
        if(newVal > oldVal) {
          this.list4Monitor()
        }
      },
    },
    methods: {
      list1Monitor() {
          console.log("List1 changed, new length: " + this.list1.length)
        for(let i = 0; i < this.list1.length; i++) {
           const cardId = this.list1[i].cardId  //a list1-ben lévő card-ok id-je
           const columnId = 1
          if(this.list1[i].colId != columnId){
            this.axiosFgPost(columnId, cardId)
            }
          }
        },
      list2Monitor() {
        for(let i = 0; i < this.list2.length; i++) {
           const cardId = this.list2[i].cardId  //a list2-ben lévő card-ok id-je
           const columnId = 2
          if(this.list2[i].colId != columnId){
            this.axiosFgPost(columnId, cardId)
            }
          }
        },
        list3Monitor() {
        for(let i = 0; i < this.list3.length; i++) {
           const cardId = this.list3[i].cardId  //a list3-ben lévő card-ok id-je
           const columnId = 3
          if(this.list3[i].colId != columnId){
            this.axiosFgPost(columnId, cardId)
            }
          }
        },
        list4Monitor() {
        for(let i = 0; i < this.list4.length; i++) {
           const cardId = this.list4[i].cardId  //a list4-ben lévő card-ok id-je
           const columnId = 4
          if(this.list4[i].colId != columnId){
            this.axiosFgPost(columnId, cardId)
            }
          }
        },
      axiosFgPost(columnId, cardId) {
        axios.post(`http://localhost:8080/api/col/${columnId}/card/${cardId}`,
              { //  email:  email.value,
              }).then(resp => {
                console.log(resp.data)
               // userData.user = resp.data
              })
              .catch(err => (error.value = 'Hibás axios hívás, próbáld meg újra'))
      },
      addList() {
        if(this.swimlaneId == 1){
          const swimlaneCardsArr = swimlane1CardData.swimlane1Card;
          this.pushCards(swimlaneCardsArr); 
        } else{
          const swimlaneCardsArr = swimlane2CardData.swimlane2Card;
          this.pushCards(swimlaneCardsArr); 
        }
      },
      pushCards(swimlaneCardsArr){
        for(let i = 0; i < swimlaneCardsArr.length; i++) {
            if(swimlaneCardsArr[i].colId == 1){
              this.list1.push({colId: swimlaneCardsArr[i].colId, cardId: swimlaneCardsArr[i].id, desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
              openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
            } else if(swimlaneCardsArr[i].colId == 2){
              this.list2.push({colId: swimlaneCardsArr[i].colId, cardId: swimlaneCardsArr[i].id, desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
              openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
            } else if(swimlaneCardsArr[i].colId == 3){
              this.list3.push({colId: swimlaneCardsArr[i].colId, cardId: swimlaneCardsArr[i].id, desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
              openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
            } else {
              this.list4.push({colId: swimlaneCardsArr[i].colId, cardId: swimlaneCardsArr[i].id, desc: swimlaneCardsArr[i].description, openWeek: swimlaneCardsArr[i].cardExistTime.existInWeek,
              openDay: swimlaneCardsArr[i].cardExistTime.remainDays})
            }
          }
      },
      update($event, list) {
        //  console.log(list.find('desc'))
        //  console.log($event.added.element.id)
        //  console.log($event.removed)
         /* const element = $event.added
         console.log(element.newIndex) */
        //  console.log($event.removed.oldIndex)
      },
      checkMove(evt) {
        // console.log(evt.relatedContext.list)
        // console.log(evt.draggedContext) //adott oszlopban hányadik sor
        //console.log(evt.draggedRect) //koordináták
        //console.log(evt.from) //melyik oszlopból származik a kártya
        //console.log(evt.related) //mozgatott kártya HTML része
        //console.log(evt.relatedContext.list)
        console.log(evt.draggedContext)
      },
      log(evt) {
        //console.log(evt)
      }
    } 
  }
    


/* update(event, element) {
        // console.log(element)
        console.log(this.$refs.change.value) */

</script>

<template>
  <div class="container">
    
    <div class="column">
      <header class="column-header">
        <h4>Backlog</h4>
      </header>
      <main class="column-main"> 
        <draggable class="dragArea list-group" :list="list1" ghost-class="ghost-card" group="list" item-key="user" @change="log" :move="checkMove">
          <template #item="{ element }">
            <div class="list-group-item">
              <div   class="list-group-card">
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
        <draggable class="dragArea list-group" :list="list2" ghost-class="ghost-card" group="list" item-key="user" @change="log" :move="checkMove">
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
        <draggable class="dragArea list-group" :list="list4" ghost-class="ghost-card" group="list" item-key="user" @change="update($event, 15)">
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