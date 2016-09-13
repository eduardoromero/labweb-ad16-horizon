<template>
  <div id="invoices">
    <h1 class="ui dividing header">
      <i class="red list icon" />
      Invoices
    </h1>

    <div class="ui basic segment">
      <table class="ui single line stripped table">
        <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>E-mail address</th>
          <th>Invoiced</th>
          <th class="text right">Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>John Lilki</td>
          <td>September 14, 2013</td>
          <td>jhlilk22@yahoo.com</td>
          <td class="text centered"><i class="ui green check circle icon" /></td>
          <td class="text right">$ 1,500.00</td>
        </tr>
        <tr>
          <td>Jamie Harington</td>
          <td>January 11, 2014</td>
          <td>jamieharingonton@yahoo.com</td>
          <td class="text centered"><i class="ui green check circle icon" /></td>
          <td class="text right">$ 5,600.00</td>
        </tr>
        <tr>
          <td>Jill Lewis</td>
          <td>May 11, 2014</td>
          <td>jilsewris22@yahoo.com</td>
          <td class="text centered"><i class="ui red remove icon" /></td>
          <td class="text right">$ 11,200.00</td>
        </tr>
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
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
