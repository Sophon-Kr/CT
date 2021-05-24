<template>
  <HeadA />

  <router-link to="/about" class="text-decoration-none textstyle">
    <div class="container" v-for="article in Articles">
      <div class="card mb-3" style="max-width: 1000px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="article.pic"
              alt="..."
              style="padding: 15px"
              class="rounded img-fluid mx-auto d-block"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">{{ article.articleNm }}</h4>
              <p class="card-text">{{ article.articleDesc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
import axios from "axios";
import HeadA from "../components/headA.vue";
export default {
  components: { HeadA },
  name: "Article4",

  data() {
    return {
      Articles: [],
      key: "",
    };
  },
  mounted() {
    axios
      .get("https://project07-062.herokuapp.com/articles")
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
//   data() {
//     return {
//         User: {
//             firstName: '',
//             lastName: '',
//             email: ''
//         }

//     }
//   },
//   methods: {
//       addToAPI () {
//           let newUser ={
//               firstName: this.User.firstName,
//               lastName: this.User.lastName,
//               email: this.User.email
//           }
//         axios.post('http://localhost:5000/users', newUser)
//         .then((response)=>{
//             console.log(response.data)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//       }
//   }
// }
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
  background-color: #f0f5ee;
  font-family: Comic Sans MS;
}
.card {
  max-width: 1000px;
}
.textstyle {
  font-family: Comic Sans MS;
  color: #87c589;
}
</style>
