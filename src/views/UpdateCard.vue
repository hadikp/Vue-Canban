<script>
  import axios from 'redaxios'
  import router from '../plugins/router'

  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          priority: '',
          positionNumber: '',
          dueAt: '',
        }
      }
    },
    async created() { //a card form-ba töltése az adatbázisból
      try {
        const resp = await axios.get(`http://localhost:8080/api/card/${this.$route.params.id}`)
        this.form = resp.data
      } catch (e) {
        error.value = 'Valami hiba történt, próbáld meg újra'
      }
    }, 
    methods: {
      update() {
      axios.put(`http://localhost:8080/api/card/${this.$route.params.id}`, //card update
       this.form ).then(resp => {
        console.log(resp.data)
        router.push({name:'board'})
      })
        .catch(err => (error.value = 'Valami hiba történt az Update-nél, próbáld meg újra'))
      }
   }
  }

</script>

<template>
  <div class="content">
    <main>
      <h2 class="update-title">Update Card</h2>
      <form class="" v-on:submit.prevent="update" >
        <div class="error">
          {{ error }}
        </div>
        <div class="form-row">
          <label for="title">Card title: </label>
          <input type="text" name="title" v-model="form.title">
        </div>
        <div class="form-row">
          
          <label for="description">Card description:</label>
          <textarea name="description" placeholder="max. 150 character" v-model="form.description"></textarea>
        </div>
        <div class="form-row">
          <label for="priority">Card priority:</label>
          <input  type="text" name="title" placeholder="Card priority" v-model="form.priority">
        </div>
        <div class="form-row">
          <label for="positioNum">Card positioNum:</label>
        <input id="positioNum" type="text" name="title" placeholder="Card positioNum" v-model="form.positionNumber">
        </div>
        <div class="form-row">
          <label for="dueAt">Card dueAt:</label>
        <input id="dueAt" type="text" name="title" placeholder="Card dueAt" v-model="form.dueAt">
        </div>
        <button class="update-button">Update</button>
      </form>
    </main>
  </div>
</template>

<style scoped>
  .update-title{
    font-family: Roboto;
    margin-bottom: 1rem;
  }
  .content{
    margin: 2rem;
  }
  .error{
    color: red;
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
  .update-button{
    background-color: var(--green);
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem;
  }
  .update-button:hover{
    background-color: #fff;
    color: var(--green);
    font-family: Roboto;
  }
  
</style>