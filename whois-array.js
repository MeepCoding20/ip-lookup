var whois = require('whois')
const ips = []; /* Ip's to check */

for (let i =0; i<1; i++) {
    whois.lookup(ips[i], function(err,data) {
        console.log(data)
    })
}
