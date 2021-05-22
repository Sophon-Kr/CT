<template>
          <HeadA />
         <div class="container">
            <router-link to="/about" class="text-decoration-none textstyle"> 
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://media.timeout.com/images/105653418/750/422/image.jpg" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">ขยายพันธุ์ยิมโนแคคตัส (Moon cactus)</h4>
                      <p class="card-text">แคคตัสตระกูลยิมโนคาไลเซียม (Gymnocalycium) มีสายพันธุ์หลากหลายกว่า 120 รายชื่อ เชื่อว่าบางสายพันธุ์อาจเห็นกันได้ทั่วไป แต่สำหรับที่เรานำมาแนะนำให้รู้จักวันนี้เป็น แคคตัสชนิดกลายพันธุ์ ที่ดูเหมือนมีแคคตัส 2 ต้นรวมร่างกันอยู่ โดยมีชื่อเรียกพันธุ์นี้ว่า Moon Cactus

                            ที่จริงแล้วกระบองเพชรพันธุ์นี้เกิดจากฝีมือมนุษย์ ที่ผสมแคคตัส 2 สายพันธุ์เข้าด้วยกัน โดยลำต้นด้านบนจะมีลักษณะกลม มีหนาม และมีสีสันอย่าง เหลือง ส้ม แดง</p>
                      
                    </div>
                  </div>
                </div>
              </div>
 </router-link>
       
  </div>

  <div class="container">
            <router-link to="/about" class="text-decoration-none textstyle"> 
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://media.timeout.com/images/105653418/750/422/image.jpg" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">ขยายพันธุ์ยิมโนแคคตัส (Moon cactus)</h4>
                      <p class="card-text">แคคตัสตระกูลยิมโนคาไลเซียม (Gymnocalycium) มีสายพันธุ์หลากหลายกว่า 120 รายชื่อ เชื่อว่าบางสายพันธุ์อาจเห็นกันได้ทั่วไป แต่สำหรับที่เรานำมาแนะนำให้รู้จักวันนี้เป็น แคคตัสชนิดกลายพันธุ์ ที่ดูเหมือนมีแคคตัส 2 ต้นรวมร่างกันอยู่ โดยมีชื่อเรียกพันธุ์นี้ว่า Moon Cactus

                        ที่จริงแล้วกระบองเพชรพันธุ์นี้เกิดจากฝีมือมนุษย์ ที่ผสมแคคตัส 2 สายพันธุ์เข้าด้วยกัน โดยลำต้นด้านบนจะมีลักษณะกลม มีหนาม และมีสีสันอย่าง เหลือง ส้ม แดง</p>
                      
                    </div>
                  </div>
                </div>
              </div>
 </router-link>
              
            
       
  </div>
  <div class="container">
            <router-link to="/about" class="text-decoration-none textstyle"> 
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://media.timeout.com/images/105653422/750/422/image.jpg" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">Card title4</h4>
                      <p class="card-text">กระบองเพชรสายพันธุ์นี้เหมาะกับตั้งไว้ประดับห้องมากๆ เพราะมีความสวยงามตามชื่อ ด้วยการแตกหน่อโตขึ้นเป็นชั้นๆ ลดหลั่นกันจนดูเหมือนเป็นปราสาท โดยแต่ละลำต้นจะมีพูประมาณ 5 พู และมีตุ่มหนามสีขาวเล็กๆ ขึ้นเรียงกันดูสวยงามมากๆ

                        ปราสาทนางฟ้า เป็นกระบองเพชรที่ไม่ต้องโดนแดดโดยตรง เพียงแค่วางรับแดดครึ่งวันเช้า และไม่ชอบน้ำมาก ทำให้เหมาะกับเลี้ยงในร่มที่คอนโดหรือห้องนอน</p>
                      
                    </div>
                  </div>
                </div>
              </div>
         </router-link>
              
            
       
  </div>
  

</template>
<script>
import axios from 'axios'
import HeadA from '../components/headA.vue'
export default {
  components: { HeadA },
  name: 'Article4',
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