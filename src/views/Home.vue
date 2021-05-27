<template>
  <div class="home-component">
    <div class="jumbotron">
      <div class="container">
        <img alt="logo" src="../assets/logo.png" width="200px" />
        <h3 class="display-5 ">
          <span style="color:#fdbc16">Storefront App</span>
        </h3>
        <p class="lead">Your Go-to Power Tools Supplier</p>
      </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page" style="color:#fdbc16">
          All Products
        </li>
        <li class="ml-auto" aria-current="page">
          <router-link to="/products">View All</router-link>
        </li>
      </ol>
    </nav>
    <AllProducts></AllProducts>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page" style="color:#fdbc16">
          Handtools
        </li>
        <li class="ml-auto" aria-current="page">
          <router-link to="/products">View All</router-link>
        </li>
      </ol>
    </nav>
    <Handtools></Handtools>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page" style="color:#fdbc16">
          Outdoor
        </li>
        <li class="ml-auto" aria-current="page">
          <router-link to="/products">View All</router-link>
        </li>
      </ol>
    </nav>
    <Outdoor></Outdoor>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page" style="color:#fdbc16">
          Gear & Repair
        </li>
        <li class="ml-auto" aria-current="page">
          <router-link to="/products">View All</router-link>
        </li>
      </ol>
    </nav>
    <GearRepairs></GearRepairs>
  </div>
</template>

<script>
import AllProducts from "@/components/products/AllProducts.vue";
import Handtools from "@/components/products/Handtools.vue";
import Outdoor from "@/components/products/Outdoor.vue";
import GearRepairs from "@/components/products/GearsRepairs.vue";
export default {
  name: "home",
  components: {
    AllProducts,
    Handtools,
    Outdoor,
    GearRepairs
  },
};
</script>
<style>
.jumbotron {
  padding: 1rem 0rem;
  background-color: #fff;
}
.breadcrumb{
  background-color: #000000;
}
</style>
