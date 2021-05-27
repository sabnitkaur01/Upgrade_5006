<template>
  <div class="handtools">
    <div class="row">
      <card-loader :loopCount="4" v-if="loading"/>
      <div class="col-md-3" v-for="(item, index) in Handtools" :key="index">
        <card-template :item="item"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";

export default {
  name: "Handtools",
  components: { CardLoader, CardTemplate },
  data() {
    return {
      Handtools: [],
      loading: false
    };
  },
  methods: {    
    getHandtools() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/handtools`)
        .then(response => {
          this.loading = false;
          this.Handtools = response.data.data;
        })
        .catch(error => {
          console.log(error);
          errorToaster(
            "The server encountered an unexpected condition.",
            "Internal Error 500"
          );
        });
    }
  },
  created() {
    this.getHandtools();
  }
};
</script>

<style>
.handtools {
  margin-bottom: 10px;
}
</style>
