<template>
  <tr>
    <td>{{ invoice.date }}</td>
    <td>{{ invoice.name}}</td>
    <td>{{ invoice.email}}</td>
    <td class="text centered"><i class="ui icon" v-bind:class="[invoice.invoiced ? 'green check circle' : 'red remove']" /></td>
    <td class="text right">{{ invoice.total | money }}</td>
  </tr>
</template>
<style lang="less">
</style>
<script>
  export default{
    name: 'InvoiceListItem',
    props: {
      invoice: {
        'type': Object,
        'required': true,
        default: {
          invoiced: false
        }
      }
    }
  }
</script>
