<template>
  <div class="container ">


   <div class="col-12">
      <div class="col-12">
      <img src="https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ" alt="" width="200" height="200" class="rounded-circle" >
   </div>
   <br>
   <div class="col">
    <h1>Firstname   &nbsp;&nbsp;&nbsp; Lastname</h1>
   </div>
   <br>

<div class="btn-group col-6" role="group" aria-label="Third group" style="margin-bottom: 20px;">
    <button type="button" class="btn btn-outline-info btn-lg">Follower</button>
    <button type="button" class="btn btn-outline-info btn-lg">Follower</button>
  </div>

  <br>

   <div class="btn-group btn-group-lg col-12" role="group" aria-label="..." style="margin-bottom: 20px;">
  <button type="button" class="btn btn-outline-success">
    <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
        </svg></span>
    Post</button>
  <button type="button" class="btn btn-outline-success">Article</button>
  <button type="button" class="btn btn-outline-success">Question</button>
   </div>
   
   <br>

   </div>
     

  </div>
  <div class="container">
    <h1>for content</h1>
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
