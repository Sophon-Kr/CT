<template>
          <HeadA />
         <div class="container" v-for="article in Articles" :key='key'>
            
            <div class="card mb-3" style="max-width: 1000px;" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img :src="article.pic" alt="..."  style="padding: 15px;" class="rounded img-fluid mx-auto d-block">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">{{article.articleNm}}</h4>
                      <p class="card-text">{{article.articleDesc}}</p>
                      
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
  name: 'Article1',
 data() {
    return {
      Articles: [],
      key: ''
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => {
        this.Articles = response.data;
        console.log(this.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filterUsers: function () {
      return this.Users.filter((user) => {
        return user.firstName.match(this.search); //จะแมทแค่ firstname
      });
    },
  },
  methods: {},
};
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