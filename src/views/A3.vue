<template>
          <HeadA />
         <div class="container">
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://media.timeout.com/images/105653422/750/422/image.jpg" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">Card title3</h4>
                      <p class="card-text">กระบองเพชรสายพันธุ์นี้เหมาะกับตั้งไว้ประดับห้องมากๆ เพราะมีความสวยงามตามชื่อ ด้วยการแตกหน่อโตขึ้นเป็นชั้นๆ ลดหลั่นกันจนดูเหมือนเป็นปราสาท โดยแต่ละลำต้นจะมีพูประมาณ 5 พู และมีตุ่มหนามสีขาวเล็กๆ ขึ้นเรียงกันดูสวยงามมากๆ

                        ปราสาทนางฟ้า เป็นกระบองเพชรที่ไม่ต้องโดนแดดโดยตรง เพียงแค่วางรับแดดครึ่งวันเช้า และไม่ชอบน้ำมาก ทำให้เหมาะกับเลี้ยงในร่มที่คอนโดหรือห้องนอน</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            
       
  </div>
  

</template>
<script>
import axios from 'axios'
import HeadA from '../components/headA.vue'
export default {
  components: { HeadA },
  name: 'Article3',
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
        .textstyle{
          font-family: Comic Sans MS; 
          color: #87C589;
        }
</style>