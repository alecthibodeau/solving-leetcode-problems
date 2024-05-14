/**
 * 1108. Defanging an IP Address
 * Run locally: $ node defanging-an-ip-address.js
 */

/**
 * @param {string} address
 * @return {string}
 */

// Input example 1
// const address = "1.1.1.1";

// Input example 2
const address = "255.100.50.0";

var defangIPaddr = function(address) {
  return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr(address));
