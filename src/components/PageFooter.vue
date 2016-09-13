<template>
  <div class="ui inverted vertical footer segment" id="footer">
    <div class="ui center aligned container">
      <div class="ui stackable grid">
        <div class="three wide column">
          <div class="ui inverted link list">
          </div>
        </div>
        <div class="three wide column" id="mapa">
        </div>
        <div class="four wide column">
          <div class="ui inverted link list">
          </div>
        </div>
        <div class="six wide column" id="cap">

        </div>
      </div>
      <div class="ui basic segment" id="copy">
       <p><span id="year">{{ year }}</span> CC - Some rights reserved.
      </div>
    </div>
  </div>
</template>
<style lang="less">
  #footer {
    background-color: #000000 !important;
    font-family: ProLight, Helvetica, sans-serif;
    min-height: 200px;
    bottom: 0;

    #copy {
      color: white;
    }
  }
</style>
<script>
  export default{
    data(){
      return {
      }
    },
    computed: {
      year: () => (new Date()).getFullYear()
    }
  }
</script>
