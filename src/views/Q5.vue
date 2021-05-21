<template>
          <HeadQ />
         <div class="container">
            
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../assets/images.jpg" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">555555555555555555555This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            
       
  </div>
  

</template>
<script>
import axios from 'axios'
import HeadQ from '../components/headQ.vue'
export default {
  components: { HeadQ },
  name: 'question5',
  data() {
    return {
        User: {
            firstName: '',
            lastName: '',
            email: ''
        } 
        
    }
  },
  methods: {
      addToAPI () {
          let newUser ={
              firstName: this.User.firstName,
              lastName: this.User.lastName,
              email: this.User.email
          }
        axios.post('http://localhost:5000/users', newUser)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
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
        
        
        }
        .card{
            max-width: 1000px;
            
            
        }
</style>