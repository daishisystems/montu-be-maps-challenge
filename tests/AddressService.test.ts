import { AddressService } from "../src/application/AddressService";
import { AddressProvider } from "../src/core/interfaces/AddressProvider";
import { Address } from "../src/core/models/Address";

class MockAddressProvider implements AddressProvider {
    async getAddressSuggestions(query: string): Promise<Address[]> {
        if (query === "Error St") {
            throw new Error("API Error");
        }
        return [{
            fullAddress: "123 Test St, Sydney, Australia",
            country: "Australia",
            countryCode: "AU",
            countryCodeISO3: "AUS",
            municipality: "Sydney",
            countrySubdivision: "NSW",
            countrySubdivisionName: "New South Wales",
            countrySubdivisionCode: "NSW",
            state: "New South Wales",
            postalCode: "2000"
        }];
    }
}

const mockProvider = new MockAddressProvider();
const addressService = new AddressService(mockProvider);

console.log("Running AddressService Tests...");

(async () => {
    try {
        const results = await addressService.getAddressSuggestions("123 Test St");
        console.log("✔ Test Passed: returns address suggestions", results);
    } catch (error) {
        console.error("✘ Test Failed: returns address suggestions", error);
    }

    try {
        await addressService.getAddressSuggestions("Error St");
        console.error("✘ Test Failed: handles API errors");
    } catch (error) {
        console.log("✔ Test Passed: handles API errors", error.message);
    }
})();