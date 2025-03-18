import { AddressService } from "../src/application/AddressService";
import { AddressProvider } from "../src/core/interfaces/AddressProvider";
import { Address } from "../src/core/models/Address";

describe("AddressService", () => {
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

    test("returns address suggestions", async () => {
        const results = await addressService.getAddressSuggestions("123 Test St");
        expect(results.length).toBe(1);
        expect(results[0].country).toBe("Australia");
    });

    test("handles API errors", async () => {
        await expect(addressService.getAddressSuggestions("Error St")).rejects.toThrow("API Error");
    });
});