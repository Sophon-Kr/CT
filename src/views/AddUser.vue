<template>
   <div>
            <img src="../assets/article.png" class="rounded img-fluid mx-auto d-block" alt="Cinque Terre" style="margin: 5px;">
        </div>
        <div class="container">
            
            search
        </div>
       

        <div class="container">
            <div class="row row-cols-auto" style="justify-content: center;">
              <div class="col">
                <div class="card" style="width: 18rem; margin: 5px;">
                    <img src="../assets/three-toed-sloth.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/three-toed-sloth.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div><div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/three-toed-sloth.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div><div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/three-toed-sloth.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div><div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/three-toed-sloth.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div><div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/three-toed-sloth.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>

            </div>
        </div>

         <div class="container">
            
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../assets/images.jpg" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      
                    </div>
                  </div>
                </div>
              </div>

       
  </div>

</template>
<script>
import axios from 'axios'
export default {
  name: 'AddUser',
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
        padding: 10px;
        
        
        }
        .card{
            max-width: 1000px;
            
            
        }
</style>