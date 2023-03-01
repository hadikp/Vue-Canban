<script setup>
  import { ref } from 'vue'
  import axios from 'redaxios'

  const title = ref('')
  const description = ref('')
  const error = ref('')

  const create = () => {
    if(!title.value || !description.value){
      error.value = 'Töltsd ki mindkét mezőt!'
      return
    }
    axios.post('http://localhost:8080/api/card/create/', //create card
      {
        title: title.value,
        description: description.value
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
        <input id="description" type="text" placeholder="Card title" v-model="description"></p>
        
        <button>To Board</button>
      
      </form>
    </main>
  </div>
</template>

<style scoped>
</style>