"use strict";

const r = require('rethinkdbdash')({
  db: 'labweb_ad16_horizon'
});

const notifier = require('node-notifier');
const path = require('path');

r.table('invoices')
 .filter({invoiced: false})
 .changes({includeInitial: true})
 .run()
 .then(function (invoices) {
   invoices.each(function (err, result) {
       if (err) throw err;
       let invoice = result.new_val;

       console.log(invoice);
       notify(invoice);
     }, function () {
       console.log('done...');
     }
   );
 })
;

const notify = function (invoice) {
  let message = {
    title: '💰'+ ' New Invoice was generated.',
    message: `We've got a new notification from ${invoice.name} - ${invoice.email}`,
    icon: path.join(__dirname, '../src/assets/logo.png'),
    sound: 'Pop',
    appIcon: false,

    group: 'invoicer'
  };

  notifier.notify(message);
};