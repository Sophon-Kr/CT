<template>
  <div class="container">
      <h1>Profile pics</h1>
      
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  name: 'Users',
  
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style scoped>
.container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
        height: auto;
        border-radius: 10px;
        border-style: solid;
        border-color: lightgrey;
        margin-top: 13px;
        background-color: #F0F5EE;
        font-family: Comic Sans MS;
        padding: 10px;
        
        
        }
        .card{
            max-width: 1000px;
            
            
        }
</style>
