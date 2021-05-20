<template>
  <div class="container">
   <div>
      <img src="https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ" alt="" width="100" height="100" class="rounded-circle" >
   </div>
   
   <div>
    <h1>Profile pics</h1>
   </div>
     

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
