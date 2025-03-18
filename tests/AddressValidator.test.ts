// AddressValidator.test.ts
import { AddressValidator } from "../src/application/AddressValidator";
import { Address } from "../src/core/models/Address";

console.log("Running AddressValidator Tests...");

(() => {
    try {
        const validAddress: Address = {
            fullAddress: "456 Queen St, Brisbane, QLD, Australia",
            country: "Australia",
            countryCode: "AU",
            countryCodeISO3: "AUS",
            municipality: "Brisbane",
            countrySubdivision: "QLD",
            countrySubdivisionName: "Queensland",
            countrySubdivisionCode: "QLD",
            state: "Queensland",
            postalCode: "4000"
        };
        if (AddressValidator.isValidAustralianAddress(validAddress)) {
            console.log("✔ Test Passed: validates Australian address");
        } else {
            console.error("✘ Test Failed: validates Australian address");
        }
    } catch (error) {
        console.error("✘ Test Failed: validates Australian address", error);
    }

    try {
        const invalidAddress: Address = {
            fullAddress: "789 Broadway, New York, USA",
            country: "USA",
            countryCode: "US",
            countryCodeISO3: "USA",
            municipality: "New York",
            countrySubdivision: "NY",
            countrySubdivisionName: "New York",
            countrySubdivisionCode: "NY",
            state: "New York",
            postalCode: "10001"
        };
        if (!AddressValidator.isValidAustralianAddress(invalidAddress)) {
            console.log("✔ Test Passed: invalidates non-Australian address");
        } else {
            console.error("✘ Test Failed: invalidates non-Australian address");
        }
    } catch (error) {
        console.error("✘ Test Failed: invalidates non-Australian address", error);
    }
})();
