<template>
  <div id="invoices">
    <h1 class="ui dividing header">
      <i class="red list icon" />
      Invoices
    </h1>

    <div class="ui basic segment" :class="{ 'loading' : isLoading }">
      <table class="ui single line stripped table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>E-mail address</th>
            <th class="text centered">Invoiced</th>
            <th class="text right">Total</th>
          </tr>
        </thead>
        <tbody>
          <Invoice v-for="invoice in invoices" v-bind:invoice="invoice" />
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="less">
  .text.centered {
    text-align: center !important;
  }
  .text.left {
    text-align: left !important;
  }
  .text.right {
    text-align: right !important;
  }
</style>
<script>
  import InvoiceListItem from './InvoiceListItem.vue';

  export default{
    name: 'InvoiceList',
    data(){
      return {
        invoicesService: this.$root.horizon('invoices'),
        isLoading: true,
        invoices: []
      }
    },
    components: {
      Invoice: InvoiceListItem
    },
    methods: {
      listenMessages() {
        this.invoicesService.limit(10).watch()
          .subscribe(invoices => {
            this.invoices = [...invoices];
          },
          error => console.log(error)
        );
      }
    },
    created() {
      this.$root.horizon.onReady()
        .subscribe(() => {
          console.log("Connected to Horizon server");

          this.isLoading = false;
          this.listenMessages();
        }
      );

      this.$root.horizon.onDisconnected()
         .subscribe(() => console.log("Disconnected from Horizon server")
      );
    },
  }
</script>
