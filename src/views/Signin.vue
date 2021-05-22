<template>
<div class="container" >
            <div style="border-color: green;" >
                    <main class="form-signin">
                    <form style="margin: 40px;">
                        <img  src="../assets/icons8-cactus-40.png" alt="" width="72" height="72" class="center">
                        <br/>
                        <h1 style="text-align: center; font-family: Comic Sans MS; color: #417F56;">Please sign in</h1>
                        <br/>
                  
                        <div class="form-floating">
                            <input type="email" v-model="formData.email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            
                        </div>
                        
                        <div class="form-floating">
                             <input type="password" v-model="formData.password" class="form-control" id="floatingPassword" placeholder="Password">
                        </div>


                        <div class="d-grid gap-2 d-md-block" style="border-color:grey;
                        border-radius: 10px;
                        background-color: white; padding:5px">
                            <button class="btn btn-outline-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                              </svg> Facebook</button>
                            <button class="btn btn-outline-danger" @click="signInGoogle" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                              </svg> Google</button>
                              <button class="btn btn-outline-info" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                              </svg> Twitter</button>
                          </div>
                          <br>
                        <div class="d-grid gap-2 ">
                          <router-link to="/signup">
                            <button class="w-100 btn btn-lg btn-secondary  btn-lg" type="submit" >Sign up</button>
                          </router-link>
                            <button class="w-100 btn btn-lg btn-success btn-lg" @click="signIn" type="submit" style="margin-top:5px">Sign in</button>
                          </div>
                      
                      
                    </form>
                    </main>
            </div>
            
        </div>

</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Signin',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(user => {
          this.$router.replace('/users')
        })
        .catch(e => {
          alert(e.message)
        })
    },
    signInGoogle () {
      var provider = new firebase.auth.GoogleAuthProvider()
      // firebase.auth().signInWithRedirect(provider).then((result) =>  {
      firebase.auth().signInWithPopup(provider).then((result) =>  {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        // console.log(user)
        this.$router.replace('/users')
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
    }
  },
  created () {}
}
</script>
<style scoped>
.container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        height: auto;
        border-radius: 40px;
        border-style: solid;
        border-color: lightgrey;
        margin-top:50px;
        background-color: #F0F5EE;
        font-family: Comic Sans MS;
        
        }
        .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        }
        
        body {
        height: 100%;
        }

        body {
        display: flex;
        align-items: center;

        background-color: #f5f5f5;
        }
        .form-signin {
        width: 100%;
        max-width: auto;
        margin: auto;
        }
        .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        }

        .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        }
        .signwith{
            border-color: grey;
            border-radius: 10px;
            background-color: ivory;
        }
        .textstyle{
          font-family: Comic Sans MS; 
          color: #87C589;
        }

</style>