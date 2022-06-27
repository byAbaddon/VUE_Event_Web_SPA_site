 <template>
  <v-row class="create">
    <v-col cols="12" v-show="show">
      <v-container class="d-flex justify-center">
        <v-row class="my-auto">
          <!-- Title--->
           <v-col cols="12" class="text-blue text-center text-decoration-underline">
            <h1>ORGANIZE EVENT</h1> 
           </v-col>
          <!--form  -->
          <v-col cols="7" class="mx-auto">
            <v-form ref="form" v-model="valid" lazy-validation height="111">
              <v-text-field
                color="blue"
                class="text-black"
                v-model="title"
                :rules="titleRules"
                label="Title"
                append-icon="mdi-alpha-t-circle-outline"
                required
                variant="outlined"
              ></v-text-field>

              <v-text-field
                color="blue"
                v-model="imageURL"
                :rules="imageRules"
                label="URL-Image"
                placeholder="https://"
                append-icon="mdi-image"
                required
                variant="outlined"
              ></v-text-field>

              <v-text-field
                color="blue"
                v-model="organizer"
                :rules="organizerRules"
                label="Organizer"
                append-icon="mdi-ninja"
                required
                variant="outlined"
                disabled
               
              ></v-text-field>

              <v-text-field
                color="blue"
                v-model="date"
                :rules="dateRules"
                label="Date"
                required
                append-icon="mdi-calendar"
                type="date"
                min=""
                variant="outlined"
              ></v-text-field>

              <v-textarea
                color="blue"
                no-resize
                rows="1"
                 row-height="15"
                outlined
                required
                append-icon="mdi-book-open-variant"
                v-model="description"
                :rules="descriptionRules"
                :counter="4"
                name="i"
                label="Description"
              
                variant="outlined"
              ></v-textarea>
          <div>
              <div class="text-caption">People who like event</div>
              <v-slider
                color="blue"
                v-model="rating"
                :rules="ratingRules"
                label="№"
                reverse-label
                required
                append-icon="mdi-medal"
                step="1"
                max="100"
                thumb-label="№"
                :value="rating"
                disabled
              >
              </v-slider>
           </div>
              <v-btn
                :disabled="
               
                  title.length < 2 ||
                  organizer.length < 3 ||
                  description.length < 4
                "
                color="success"
                :elevation="12"
                class="mr-4"
                @click="validate"
              >
                Add
              </v-btn>

              <!-- <v-btn :elevation="12" color="error" class="mr-4" @click="reset"> Reset </v-btn> -->
              <v-btn :elevation="12" color="error" class="mr-4" @click="exit">
                Exit
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col>
      <!-- alert   -->
      <div class="mx-auto">
        <v-alert
          class="mx-auto"
          height="50"
          width="47em"
          type="error"
          icon="mdi-alert"
          v-show="showErrorAlert"
        >
          {{ errorMessage }}
        </v-alert>
      </div>
    </v-col>

    <!-- dialog success message-->
    <v-dialog v-model="showMessageDialog" color="dark" width="500" persistent>
      <v-card>
        <v-card-text>
          <h4
            class="
              green-text
              body-1
              text-weight-bold text-center text-uppercase
              pt-10
            "
          >
            Success add event <span class="blue-text">{{ title }}</span> to
            collection
            <h5 class="yellow-text text-center body-2">
              You will be redirect to events page
            </h5>
          </h4>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
import { addData as addNewEvent} from "@/service/addData";
import { useRouter } from 'vue-router'
import { useDataStore } from "@/stores/userData";
import { ref } from "vue";
export default {
  setup() {
    let dataStore = useDataStore()
    let router = useRouter()
    let show = ref(true);
    let valid = ref(true);
    let showErrorAlert = ref(false);
    let showMessageDialog = ref(false);
    let errorMessage = ref("");

    let title = ref("E.T.")
    let titleRules =ref( [
      (v) => !!v || "Title is required",
      (v) => (v && v.length >= 2) || "Title must be that more 1 characters",
    ])

    let imageURL = ref(
      "https://discover.ticketmaster.co.uk/wp-content/uploads/2022/05/Anything-Goes-2022.-Anything-Goes.-Photo-by-Marc-Brenner-738x415.jpg.webp")
    let imageRules = ref([
      (v) => !!v || "Images is required",
      (v) =>
        (v && /https?:\/\//.test(v)) ||
        "Images must be start with http:// ot https://",
    ])
    let organizer = ref(dataStore.data.uid)
    let organizerRules = ref([
      (v) => !!v || "Organizer is required",
      (v) => (v && v.length >= 2) || "Organizer must be that more 1 characters",
    ])

    let description = ref("The third installment of  which follows the continuing adventures of Newt Scamander.")

    let descriptionRules =ref( [
      (v) => !!v || "Description is required",
      (v) =>(v && v.length > 3) || "Description must be more than 4 characters",
        
    ])

    let date = ref(1)
    let dateRules = ref([
      (v) => !!v || "Date is required",
      (v) => (v && v.length >= 3) || "Date count must be number bigger than -1",
    ])
    let rating = ref("0")
    let ratingRules = ref([
      (v) => !!v || "People description is required",
      (v) => (v && v >= 0) || "People is required",
    ])

    let validate = () => {
      if ($refs.form.validate()) {
        //fix input fields result
        title = title.charAt(0).toUpperCase() + title.slice(1); //capitalize first letter
        

        try {
          tickets = date.replace(/^0+/, "");
        } catch (e) {
          ("");
        } //remove leading zero

        const uid = JSON.parse(localStorage.getItem("auth")).uid;
        const newEventObj = {
          uid,
          title,
          image: imageURL,
          organizer,
          description,
          date,
          rating,
        };

        //check is movie in collection
        const checkIsEventExist = movies.some(
          (x) => x.title == title && x.imageUrl == imageURL
        );
        console.log(checkIsEventExist);

        addData(newEventObj)
          .then((e) => {
            console.log("Success add new event to collection", e);
            showMessageDialog = true;
            setTimeout(() => {
              showMessageDialog = false;
              $router.push("events"); //redirect ot movies Page   TODO
            }, 3500);
          })
          .catch((e) => {
            errorMessage = e;
            showErrorAlert = true;
            setTimeout(() => (showErrorAlert = false), 3000);
          });

        resetValidation = () => {
          $refs.form.resetValidation();
        };
      }
    };

   const reset = () => {
      try {
        $refs.form.reset();
      } catch (error) {
        ("");
      }
    };

   const  exit = () => {
      show = false;
      // $router.push("home");
      setTimeout(() => {
        router.push("events");
      }, 100);
    };
    return {
      show,
      valid,
      showErrorAlert,
      showMessageDialog,
      errorMessage,
      title,
      titleRules,
      imageURL,
      imageRules,
      organizer,
      organizerRules,
      description,
      descriptionRules,
      date,
      dateRules,
      rating,
      ratingRules,
      validate,
      reset,
      exit,
    };
  },
};
</script>



<style scoped >
.create {
  margin: 0em;
  height: 100%;
  background: url("") no-repeat, linear-gradient(#ffffff, #ffffff);

  /* background: white; */
}
</style>