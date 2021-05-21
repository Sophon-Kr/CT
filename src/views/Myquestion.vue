<template>
          <Profile />
         <div class="container">
            
            <div class="card mb-3" style="max-width: 1000px;" >
                <h1>MyQuesyion</h1>
              </div>
            
       
  </div>
  

</template>
<script>
import axios from 'axios'
import Profile from '../components/Profile.vue'
export default {
  components: { Profile },
  name: 'Myquestion',
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