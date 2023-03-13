<script setup>
  import { ref } from 'vue'
  import axios from 'redaxios'
  import router from '../plugins/router'
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

  const swimlane1CardData = useSwimlane1CardStore()
  const swimlane2CardData = useSwimlane2CardStore()

  const create = () => {
    if(!title.value || !description.value){
      error.value = 'Töltsd ki mindkét mezőt!'
      return
    }
    axios.post('http://localhost:8080/api/card/create', //create card
      {
        title: title.value,
        description: description.value,
        priority: priority.value,
        positionNumber: positionNumber.value,
        dueAt: dueAt.value,
        colId: colId.value,
        userId: userId.value,
        swimlaneId: swimlaneId.value
      }).then(resp => {
          // swimlane1CardData.swimlane1Card.push(resp.data);
          console.log(resp.data);
          })
          router.push({name:'board'})
        .catch(err => (error.value = 'Valami hiba történt, próbáld meg újra'))
  }

</script>

<template>
  <div class="content">
    <main>
      <h2 class="create-title">Create Card</h2>
      <form class="" v-on:submit.prevent="create">
        <div class="error">
          {{ error }}
        </div>
        <div class="form-row">
          <label for="title">Card title: </label>
          <input type="text" name="title" placeholder="max. 50 character" v-model="title">
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
        <button class="create-button">To Board</button>
        
      
      </form>
    </main>
  </div>
</template>

<style scoped>
  .create-title{
    font-family: Roboto;
    margin-bottom: 1rem;
  }
  .content{
    margin: 2rem;
  }
  .form-row{
    display: flex;
    justify-content: flex-end;
    padding: .5em;
    width: 30vw;
  }
  .error{
    color: red;
  }
  .form-row > label{
    flex: 1;
  }
  .form-row > input,textarea{
    flex: 2;
  }
  .create-button{
    background-color: var(--green);
    color: #fff;
    font-family: Roboto;
    font-size: 1rem;
    padding: 0.5rem;
  }
  .create-button:hover{
    background-color: #fff;
    color: var(--green);
    font-family: Roboto;
  }
  
</style>