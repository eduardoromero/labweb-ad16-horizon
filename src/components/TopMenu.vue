<template>
  <div class="ui menu" id="top">
    <div class="ui container">
      <router-link :to="{ path: '/' }" class="header item logo" activeClass="home">
        <img src="../assets/logo.png">
      </router-link>

      <router-link :to="{ path: 'invoices' }" class="item">
        <span>Invoices</span>
      </router-link>

      <router-link :to="{ path: 'new_invoice' }" class="item">
        <span>New Invoice</span>
      </router-link>

    </div>
    <div class="right menu">

    </div>
  </div>
</template>
<style lang="less">
  @font-color: #595a5c;
  @background-color: #white;

  #top {
    background-color: @background-color;
    font-family: Cervo-Regular, Helvetica, sans-serif;
    font-weight: normal;
    color: @font-color;

    .logo {
      border: none;
      margin-left: 10px;
      padding-right: 50px;
      margin-right: 50px;

      img {
        width: auto;
        height: 50px;
      }
    }

    .item {
      padding-left: 0;
      padding-right: 0;
      text-align: center;
      color: @font-color;
      font-size: 1.7rem;

      span {
        padding: 10px 35px 5px 35px;
        border-right: 2px solid fade(@font-color, 70%);
      }
    }

    .item:before {
      background: none;
    }

    .item:hover {
      color: black;
      background: none;
      text-decoration: none;
      font-weight: 400;
    }
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
