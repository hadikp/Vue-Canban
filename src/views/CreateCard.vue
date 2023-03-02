<script setup>
  import { ref } from 'vue'
  import axios from 'redaxios'

  const title = ref('')
  const description = ref('')
  const priority = ref('')
  const positioNum = ref('')
  const dueAt = ref('')
  const colId = ref('')
  const userId = ref('')
  const swimlaneId = ref('')
  const error = ref('')

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
        positioNum: positioNum.value,
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
      <form class="" v-on:submit.prevent="create">
        <p>{{ error }}</p>
        <p><label for="title">Card title</label>
        <input id="title" type="text" placeholder="Card title" v-model="title"></p>
        <p><label for="description">Card description</label>
        <input id="description" type="text" placeholder="Card description" v-model="description"></p>
        <p><label for="priority">Card priority</label>
        <input id="priority" type="text" placeholder="Card priority" v-model="priority"></p>
        <p><label for="positioNum">Card positioNum</label>
        <input id="positioNum" type="text" placeholder="Card positioNum" v-model="positioNum"></p>
        <p><label for="dueAt">Card dueAt</label>
        <input id="dueAt" type="text" placeholder="Card dueAt" v-model="dueAt"></p>
        <p><label for="colId">Card colId</label>
        <input id="colId" type="text" placeholder="Card colId" v-model="colId"></p>
        <p><label for="userId">Card userId</label>
        <input id="userId" type="text" placeholder="Card userId" v-model="userId"></p>
        <p><label for="swimlaneId">Card swimlaneId</label>
        <input id="swimlaneId" type="text" placeholder="Card swimlaneId" v-model="swimlaneId"></p>
        
        <button>To Board</button>
      
      </form>
    </main>
  </div>
</template>

<style scoped>
</style>