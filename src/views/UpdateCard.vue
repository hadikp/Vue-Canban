<script setup>
  import { ref } from 'vue'
  import axios from 'redaxios'
  import { useRoute } from 'vue-router'
  import { useCardStore } from '../../stores/card'
  import { useSwimlane1CardStore } from '../../stores/swimlane1Card'
  import { useSwimlane2CardStore } from '../../stores/swimlane2Card'

  const title = ref('')
  const description = ref('')
  const priority = ref('')
  const positionNumber = ref('')
  const dueAt = ref('')
  const colId = ref('')
  const userId = ref('')
  const swimlaneId = ref('')
  const error = ref('')

  const route = useRoute() 
  const idFromDragAndDrop = route.params.id; //from DragAndDrop, cardId

  const cardData = useCardStore()
  const swimlane1CardData = useSwimlane1CardStore()
  const swimlane2CardData = useSwimlane2CardStore()

  if(swimlane1CardData.swimlane1Card.cardId == idFromDragAndDrop){

  }

  const update = () => {
    if(!title.value || !description.value){
      error.value = 'Töltsd ki mindkét mezőt!'
      return
    }
    axios.put(`http://localhost:8080/api/card/${idFromDragAndDrop}`, //update card
      {
        title: title.value,
        description: description.value,
        priority: priority.value,
        positionNumber: positionNumber.value,
        dueAt: dueAt.value,
        colId: colId.value,
        userId: userId.value,
        swimlaneId: swimlaneId.value
      }).then(resp => 
          (console.log(resp.data)))
          // userData.user = resp.data.data.user))
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
          <input type="text" name="title" value="{{  }}" v-model="title">
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
        <div class="form-row">
          <label for="colId">Card colId:</label>
        <input id="colId" type="text" name="title" placeholder="Card colId" v-model="colId">
        </div>
        <div class="form-row">
          <label for="userId">Card userId:</label>
        <input id="userId" type="text" name="title" placeholder="Card userId" v-model="userId">
        </div>
        <div class="form-row">
          <label for="swimlaneId">Card swimlaneId:</label>
        <input id="swimlaneId" type="text" placeholder="Card swimlaneId" v-model="swimlaneId">
        </div>
        <button>To Board</button>
      
      </form>
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