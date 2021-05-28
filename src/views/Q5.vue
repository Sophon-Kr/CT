<template>
  <HeadQ />
  <div class="container" v-for="question in category(Questions)">
    <div class="card mb-3" style="max-width: 1000px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="question.pic"
            alt="..."
            
            class="rounded img-fluid mx-auto d-block"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">{{ question.questionTopic }}</h4>
            <p class="card-text">{{ question.questionDesc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HeadQ from "../components/headQ.vue";
export default {
  components: { HeadQ },
  name: "question5",
  data() {
    return {
      Questions: [],
    };
  },
  mounted() {
    axios
      .get("https://project07-062.herokuapp.com/questions")
      .then((response) => {
        this.Questions = response.data;
        console.log(this.Questions);
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
  methods: {
    category: function () {
    return this.Questions.filter((Questions) =>{
      return Questions.category == 5 
    })
  }
  },
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
  background-color: #f0f5ee;
  font-family: Comic Sans MS;
}
.card {
  max-width: 1000px;
  max-height: 170px;
  overflow-y:hidden;
  overflow-x:hidden;
  text-align: left;
}
.textstyle {
  font-family: Comic Sans MS;
  color: #87c589;
}
</style>
