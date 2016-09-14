import Vue from 'vue';
import accounting from 'accounting';

Vue.filter('money', function (moneyInteger) {
  return accounting.formatMoney(moneyInteger, {
    symbol : "$",
    precision : 2,
    format: "%s %v"
  });
});

