"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressValidator = void 0;
var AddressValidator = /** @class */ (function () {
    function AddressValidator() {
    }
    AddressValidator.isValidAustralianAddress = function (address) {
        return address.country === 'Australia';
    };
    return AddressValidator;
}());
exports.AddressValidator = AddressValidator;
