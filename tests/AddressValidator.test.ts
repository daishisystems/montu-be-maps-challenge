import { AddressValidator } from "../src/application/AddressValidator";
import { Address } from "../src/core/models/Address";

describe("AddressValidator", () => {
    test("validates Australian address", () => {
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
        expect(AddressValidator.isValidAustralianAddress(validAddress)).toBe(true);
    });

    test("invalidates non-Australian address", () => {
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
        expect(AddressValidator.isValidAustralianAddress(invalidAddress)).toBe(false);
    });
});
