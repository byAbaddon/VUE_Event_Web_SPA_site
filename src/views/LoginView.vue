<template >
  <div class="login">
    <div class="text-center pt-2">
      <h1>You are on one step of awesome events!</h1>
      <h3 class="">Don't have account? Then just
         <v-btn variant="text" to="/register" class="text-red text-decoration-underline pr-1"  > Sign-Up!</v-btn>
      </h3> 
    </div>

    <v-card class="mx-auto" max-width="340">
      <v-card-title class="d-flex justify-center bg-blue-lighten-1">
        <span class="text-white font-weight-bold">SING-IN</span>
      </v-card-title>
    
       <v-img
        src="@/assets/images/loginEventPic.jpg"
        lazy-src="@/assets/images/graduation-edit.png"
        cover
        ></v-img>


      <v-form class="bg-blue-lighten-3">
        <!-- email   -->
        <v-text-field
          style="height:100px;"
          class="my-0 pa-5 py-5"
          prepend-inner-icon="mdi-email mr-3 mt-1"
          append-icon="mdi-blank"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          type="email"
          required
          clearable
          variant="underlined"
        >
          <!-- <v-icon large  color="blue-darken-1 mr-2">   mdi-email</v-icon> -->
        </v-text-field>

        <!-- password   -->
        <v-text-field
          style="height: 100px;"
          class="mx-5"
          prepend-inner-icon="mdi-lock mr-3"
          clearable
          label="Password"
          v-model="pass"
          :rules="passRules"
          :counter="6"
          required
          variant="underlined"
          :append-icon="showPass ? 'mdi-eye ' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          @click:append="showPass = !showPass"
        ></v-text-field>

        <!-- btnLogin   -->
        <div class="text-center mt-0 pb-5">
          <v-btn
            class="bg-blue white--text"
            :disabled="showProgressCircular"
            elevation="8"
            :loading="showProgressCircular"
            @click="login"
          >Login
          </v-btn>
        </div>
      </v-form>
    </v-card>

    <!-- alert   -->
    <div >
      <v-alert
        class="mx-auto mt-9"
        height="50"
        width="22.5em"
        type="error"
        icon="mdi-alert"
        v-show="showErrorAlert"
      >
        {{ errorMessage }}
      </v-alert>
    </div>

  </div>
</template>


<script setup>
import getUserProfileData from '@/service/getUserProfileData'
import singUser from '@/service/login'

 
   let errorMessage = ""
   let showErrorAlert = false
   let showProgressCircular = false
   let showPass = false
   let pass = "111111"
   let email = "koko@abv.bg"

   let emailRules = [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]

   let passRules = [
      (v) => !!v || "Password is required",
      (v) => (v && v.length > 5) || "Password must be more than 5 chars",
    ]
  

     let login = () => {
      showProgressCircular = true;
      setTimeout(() => (showProgressCircular = false), 3000);
      //invoke login function
      singUser(email, pass).then(message => {
        if (message == 'success') {
           getUserProfileData().then( (userData) => {   //getUserDataFromRegisterProfile
             const [userName, userPhoto] = userData
              this.$root.$emit('user-data', userName, userPhoto)   
           })
           this.$router.push('/movies') //redirect to page
        }else{
            errorMessage = message
            showErrorAlert = true;
            setTimeout(() => (showErrorAlert = false), 3000)
        }
        
      });
    }
 
</script>


<style scoped>

.login{
  background: url("");
  background: linear-gradient(  #c0d9ff, #ffffffc9);
}

</style>