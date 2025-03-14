"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TomTomProvider_1 = require("../infrastructure/providers/TomTomProvider");
var AddressService_1 = require("../application/AddressService");
var provider = new TomTomProvider_1.TomTomProvider();
var service = new AddressService_1.AddressService(provider);
var query = process.argv[2];
if (!query) {
    console.log('Please enter an address query.');
    process.exit(1);
}
service.getAddressSuggestions(query).then(console.log);
