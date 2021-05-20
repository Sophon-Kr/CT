<template>
    <div class="container " style="max-width: 1000px;">

            <div class="card text-center " style="margin-top: 10px;" >
                <div class="card-header" style="background-color: #87C58A;">
                    <div style="text-align: left;">
                        <a href="#" style="text-decoration: none;" >
                            <span ><img src="https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ" alt="" width="35" height="35" class="rounded-circle" ></span>
                          </a>
                          <span >&nbsp;&nbsp;Firstname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastname</span>
                          <div style="float: right; margin-right: 10px; color: red;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F44336" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                              </svg>
                            50</div>
                    </div>
                    </div>
                    
                   
                    

                <div class="card-body" style="text-align: left;">
                    <img src="https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ" class="rounded img-fluid mx-auto d-block" alt="Cinque Terre" style="margin: 5px;">
                  
                  <p class="card-text" style="padding: 10px;">
                                With supporting text below as a natural lead-in to additional content.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi facilis neque 
                      dolorem necessitatibus eaque saepe aperiam est adipisci quos excepturi, quod molestias 
                      facere doloribus ipsa, ducimus delectus corrupti laboriosam.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi facilis neque 
                      dolorem necessitatibus eaque saepe aperiam est adipisci quos excepturi, quod molestias 
                      facere doloribus ipsa, ducimus delectus corrupti laboriosam.
                      
                      
                  </p>
                </div>


                <div class="card-footer text-muted" style="background-color: #F0F5EE">
                    
                    <p style="margin: 5px;"><button type="button" class="btn btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                          </svg>
                        Danger</button>
                        <button class="btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                              </svg>
                            Comment
                        </button>
                      </p>
                      <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div class="card">
                                <div class="card-header">
                                    <div style="text-align: left;">
                                        <a href="#" style="text-decoration: none;" >
                                            <span ><img src="https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ" alt="" width="35" height="35" class="rounded-circle" ></span>
                                          </a>
                                          <span>&nbsp;&nbsp;Firstname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastname</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                  <blockquote class="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                  </blockquote>
                                </div>
                              </div>

                              
                        </div>

                        <div class="form-floating" style="margin-top: 5px;">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Comments</label>
                          </div>
                      </div>
                      
                </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'Home',

  data() {
    return {
        Users: [],
        search: '',
        uid: ''
    }
  },
  mounted () {
      axios.get('http://localhost:5000/users')
        .then((response)=>{
            console.log(response.data)
            this.Users = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
  },
  computed: {
      filterUsers: function(){
          return this.Users.filter((user)=>{
              return user.firstName.match(this.search) //จะแมทแค่ firstname
          })
      }
  },
  methods: {
      DELETE(id){
          this.uid = id
      },
      delUser(UserId){
        axios.delete('http://localhost:5000/users/'+ UserId)
        .then(()=>{
            console.log('Delete userID: '+ UserId)
            this.Users = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
        window.location.reload()
      }
  }
}
</script>
<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
        height: auto;
        border-radius: 15px;
        border-style: solid;
        border-color: lightgrey;
        margin-top: 20px;
        background-color: #F0F5EE;
        font-family: Comic Sans MS;
        padding: 10px;
        
        
        }
    .headpost{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
        height: auto;
        border-radius: 15px;
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