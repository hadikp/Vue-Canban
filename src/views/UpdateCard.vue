<script setup>
  import { computed, ref, reactive } from 'vue'
  import axios from 'redaxios'
  import { useRoute } from 'vue-router'
  import { useCardStore } from '../../stores/card'
  import { useSwimlane1CardStore } from '../../stores/swimlane1Card'
  import { useSwimlane2CardStore } from '../../stores/swimlane2Card'


  const route = useRoute() 
  const idFromDragAndDrop = route.params.id; //from DragAndDrop, cardId

  const updateCardData = useCardStore()
  const swimlane1CardData = useSwimlane1CardStore()
  const swimlane2CardData = useSwimlane2CardStore()

  const title = ref('')
  const description = ref('')
  const priority = ref('')
  const positionNumber = ref('')
  const dueAt = ref('')
  const error = ref('')

  const data = () => {title,
    description,
    priority,
    positionNumber,
    dueAt;
    return {title, description, priority, positionNumber, dueAt}
    }

  const cardData = axios.get(`http://localhost:8080/api/card/${idFromDragAndDrop}`, //card from db
      {
        /* title: title.value,
        description: description.value,
        priority: priority.value,
        positionNumber: positionNumber.value,
        dueAt: dueAt.value, */
        
      }).then(resp => {
        // console.log(resp.data)
        updateCardData.card = resp.data
      })
          // userData.user = resp.data.data.user))
        .catch(err => (error.value = 'Valami hiba történt, próbáld meg újra'))
  
   console.warn(cardData.value) 

  /* const load = computed(() => {
    return updateCardData.card.find(card => card.id == idFromDragAndDrop)
  })     */

  /* if(swimlane1CardData.swimlane1Card.cardId == idFromDragAndDrop){

  } */

  const update = () => {
    const card = reactive({title: '', description: '', priority: '', positionNumber: '', dueAt: ''});

    axios.put(`http://localhost:8080/api/card/${idFromDragAndDrop}`, //update card
      {
        title: title.value,
        description: description.value,
        priority: priority.value,
        positionNumber: positionNumber.value,
        dueAt: dueAt.value,
        
      }).then(resp => 
          (console.log(resp.data)))
         
        .catch(err => (error.value = 'Valami hiba történt, próbáld meg újra'))
  }

</script>

<template>
  <div class="content">
    <main>
      <h2>Create Card</h2>
      <form class="" v-on:submit.prevent="update">
        <p>{{ error }}</p>
        <div class="form-row">
          <label for="title">Card title: </label>
          <input type="text" name="title" v-model="title">
        </div>
        <div class="form-row">
          
          <label for="description">Card description:</label>
          <textarea name="description" placeholder="max. 150 character" v-model="description"></textarea>
        </div>
        <div class="form-row">
          <label for="priority">Card priority:</label>
          <input  type="text" name="title" placeholder="Card priority" v-model="priority">
        </div>
        <div class="form-row">
          <label for="positioNum">Card positioNum:</label>
        <input id="positioNum" type="text" name="title" placeholder="Card positioNum" v-model="positionNumber">
        </div>
        <div class="form-row">
          <label for="dueAt">Card dueAt:</label>
        <input id="dueAt" type="text" name="title" placeholder="Card dueAt" v-model="dueAt">
        </div>
        <button>Update</button>
      </form>
      <button @click="load">Load</button>
    </main>
  </div>
</template>

<style scoped>
  .content{
    margin: 2rem;
  }
  .form-row{
    display: flex;
    justify-content: flex-end;
    padding: .5em;
    width: 30vw;
  }
  .form-row > label{
    flex: 1;
  }
  .form-row > input,textarea{
    flex: 2;
  }
  
</style>