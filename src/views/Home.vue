<template>

<div class="container"  style="max-width: 1000px;">
      <div class="col-12 mb-3" style="min-height: auto;  min-width: auto;">
        <div>
          
          <h3 class="col-12"> New Post<img width="40" height="40" src="https://img.icons8.com/cute-clipart/64/000000/pencil.png"/> </h3>

          
        </div>
  <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea> -->
<div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <form >
  <div class="form-group ">
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>

  <div class="d-grid  d-md-flex justify-content-md-end" style="margin-top:10px; ">




<button type="button" class="btn btn-danger" style="margin-left:10px; ">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
  Cancel</button>
<button type="button" class="btn btn-success" style="margin-left:10px; ">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>
   Post</button>


</div>

</div>
</div>
    <div class="container" style="max-width: 1000px;" v-for="users in Users">

            <div class="card text-center " style="margin-top: 10px;" >
                <div class="card-header" style="background-color: #87C58A;">
                    <div style="text-align: left;">
                        <a href="#" style="text-decoration: none;" >
                            <span ><img :src="users.profileImage" alt="" width="35" height="35" class="rounded-circle" ></span>
                          </a>
                          <span >&nbsp;&nbsp;{{users.firstname}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{users.lastname}}</span>
                          <div style="float: right; margin-right: 10px; color: red;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F44336" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                              </svg>
                            50</div>
                    </div>
                    </div>
                    
                   
                    

                <div class="card-body" style="text-align: left;">

                    <img src="https://media.timeout.com/images/105653439/750/422/image.jpg" class="rounded img-fluid mx-auto d-block" alt="Cinque Terre" style="margin: 5px;">
                  
                  <p class="card-text" style="padding: 10px;">
                                แคคตัสทรงอวบกลมที่ทุกคนเห็นกันบ่อยๆ แต่รู้ไหมว่าตอนนี้แคคตัสพันธุ์นี้ถูกกำกับว่าใกล้สูญพันธุ์นะ เนื่องจากหาได้ยากในธรรมชาติ

                                กระบองเพชรพันธุ์นี้มาจากตระกูลเฟโรแคคตัส (Ferocactus) ที่สามารถโตได้มากสุดถึง 1 เมตรเลยทีเดียว ดังนั้น ขนาดที่เราเห็นกันบ่อยๆ เป็นเพียงไซส์จิ๋วมากๆ เท่านั้นเอง โดย แคคตัสถังทอง จะมีผิวสีเขียว หนามสีเหลืองทอง เมื่อโตขึ้นด้านบนจะยุบลงทำให้ดูคล้ายถัง ส่วนผิวของต้นนี้จะค่อนข้างบาง เราจึงไม่ควรปล่อยให้เขาโดนแดดจัด เพราะอาจทำให้ผิวไหม้ได้    
                      
                  </p>
                </div>


                <div class="card-footer text-muted" style="background-color: #F0F5EE">
                    
                    <p style="margin: 5px;"><button type="button" class="btn btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                          </svg>
                        Danger</button>
                        <button class="btn btn-outline-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
                                    <p>อาจมองเผินๆ แล้วดูเหมือนพืชอย่างบร็อคโคลี่อยู่ไม่น้อย แต่ที่จริงแล้วกระบองเพชรสายพันธุ์นี้เป็นแคคตัสจากตระกูล แอริโอคาร์ปัส ฟิสซูราตัส (Ariocarpus fissuratus) ซึ่งเป็นพันธุ์แคคตัสหายาก ไร้หนาม และค่อนข้างโตช้า ทว่าราคาค่อนข้างสูง หลายคนที่ชอบสะสมแคคตัสจะนิยมเลี้ยงกัน</p>
                                    <!-- <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> -->
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
        uid: '',
        imagePro:'',
    }
  },
  mounted () {
      axios.get('http://localhost:5000/users')
        .then((response)=>{
            this.Users = response.data
            console.log(this.Users)
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
        .textstyle{
          font-family: Comic Sans MS; 
          color: #87C589;
        }

    </style>