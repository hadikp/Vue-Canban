<script setup>
  defineEmits(['close'])
  defineProps({ isModalOpen: Boolean, })

</script>

<template>
  <div v-if="isModalOpen" :class="overlay"></div>
  <div  v-if="isModalOpen" :class="container">
    <div :class="modal">
      <header>
        <h4>Card1 header</h4>
      </header>
      <main>
        <div class="title">
          <h3>Card1 title</h3>
        </div>
        <div class="body">
          <h3>Description of Card1</h3>
        </div>
      </main>
      <footer>
        <h4>Create date:</h4>
      </footer>
    </div>
  </div>
  
</template>

<style scoped>
  .overlay{
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    inset: 0;
  }
  .container{
    position: fixed;
    inset: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal{
    width: 50vw;
    margin: 0 auto;
    padding: 2rem;
    z-index: 10;
    background-color: #fff;
    transform: translateY(-2rem);
  }
  .content{
    background-color: #fff;
    border: 1px solid #000;
    margin-left: 2.5rem;
    width: 15vw;
  }
</style>