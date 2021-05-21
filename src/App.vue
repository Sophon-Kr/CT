<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <h1>EGCO427</h1> ปรากฏอยู่ทุกหน้า -->


    <nav class="navbar navbar-light" style="background-color: #87C589; font-family: Comic Sans MS;">
      <router-link to="/users" class="text-decoration-none">
      <a href="" class=" d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="./assets/icons8-cactus-in-pot-48.png" alt="" width="35" height="35" class="d-inline-block align-text-top">
        <span class="fs-4" style="font-family: Comic Sans MS; color: #FFFFFF;"> &nbsp;&nbsp;MYCACTI&nbsp;&nbsp;</span>
      </a>
      </router-link>

        <div style="margin-right: 35px; margin-left: 35px;" class="space"> 
         <router-link to="/users"> 
        <button class="btn btn-success me-2 space"   type="button">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
        </svg></span>
          Home</button>
          </router-link>

          <router-link to="/article">
        <button class="btn btn-success me-2 space"   type="button"> 
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-richtext-fill" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
          </svg> </span>
           Article</button>
           </router-link>

        <router-link to="/question">
        <button class="btn btn-success me-2 space"   type="button">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-quote-fill" viewBox="0 0 16 16">
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
          </svg></span>
          Question</button> 
           </router-link>

           <!-- <router-link to="/about">
        <button class="btn btn-success me-2 space"   type="button">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
          </svg></span>
          Shop  <span class="badge rounded-pill bg-danger">
          3
        </span></button>
        </router-link> -->

        <router-link to="/mypost">
          <span ><img src="./assets/three-toed-sloth.jpg" alt="" width="35" height="35" class="rounded-circle" ></span>
        </router-link>
      </div>
    </nav> <!--manu bar -->

    <router-view/> <!--เรีนกตามcomponent -->
  </div>  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import firebase from 'firebase'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      usrid : ""
    }
  }
}
</script>
<style>
.space{
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 2px;
}
.textstyle{
          font-family: Comic Sans MS; 
          color: #87C589;
        }
</style>
