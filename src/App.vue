<template>
  <div id="app">
    <TopMenu/>
    <div class="ui container content">
      <router-view/>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
  import Horizon from '@horizon/client';
  import Vue from 'vue';

  import TopMenu from './components/TopMenu.vue';
  import PageFooter from './components/PageFooter.vue';

  export default {
    data () {
      return {
        horizon: Horizon({host: '127.0.0.1:8181'}),
        eventBus: new Vue(),
        msg: 'Wazzup | Horizon | RethinkDB'
      }
    },
    created() {
      this.horizon.connect();
    },
    components: {
      TopMenu: TopMenu,
      PageFooter: PageFooter
    }
  }
</script>

<style lang="less">
  @import url('https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css');

  body {
    font-family: Helvetica, sans-serif;
  }

  .content {
    margin-top: 25px;
    min-height: 500px;
  }
</style>
