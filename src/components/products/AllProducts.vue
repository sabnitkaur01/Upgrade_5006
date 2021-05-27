<template>
  <div class="all-products">
    <div class="row">
      <card-loader :loopCount="4" v-if="loading"/>
      <div class="col-md-3" v-for="(item, index) in allProducts" :key="index">
        <card-template :item="item"/>
      </div>
    </div>
    <edit-product ref="editProduct"/>
  </div>
</template>

<script>
import axios from "axios";
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import EditProduct from "./actions/EditProduct";
export default {
  name: "AllProducts",
  components: { CardLoader, CardTemplate, EditProduct },
  data() {
    return {
      allProducts: [],
      loading: false
    };
  },
  methods: {
    //manadatory function called from cardTemplate
    editProduct(product) {
      this.$refs.editProduct.setProduct(product);
    },

    getallProducts() {
      this.loading = true;
      axios
        .get(`http://127.0.0.1:3000/products`)
        .then(response => {
          this.loading = false;
          this.allProducts = response.data.data;
          console.log(this.allProducts);
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
    this.getallProducts();
  }
};
</script>

<style>
.all-products {
  margin-bottom: 10px;
}
</style>
