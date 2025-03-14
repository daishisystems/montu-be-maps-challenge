import axios from 'axios';
import { AddressProvider } from '../../core/interfaces/AddressProvider';
import { Address } from '../../core/models/Address';
import dotenv from 'dotenv';

dotenv.config();

interface TomTomAPIResponse {
  results: {
    address: {
      freeformAddress: string;
      country: string;
      countryCode: string;
      countryCodeISO3: string;
      municipality: string;
      countrySecondarySubdivision?: string;
      countrySubdivision: string;
      countrySubdivisionName: string;
      countrySubdivisionCode: string;
      postalCode?: string;
    };
    type: string;
  }[];
}

export class TomTomProvider implements AddressProvider {
  private apiKey: string = process.env.TOMTOM_API_KEY || '';

  async getAddressSuggestions(query: string): Promise<Address[]> {
    const url = `https://api.tomtom.com/search/2/search/${encodeURIComponent(query)}.json?key=${this.apiKey}&countrySet=AU`;

    try {
      const response = await axios.get<TomTomAPIResponse>(url);
      return response.data.results.map((result) => ({
        fullAddress: result.address.freeformAddress,
        country: result.address.country,
        countryCode: result.address.countryCode,
        countryCodeISO3: result.address.countryCodeISO3,
        municipality: result.address.municipality,
        countrySecondarySubdivision: result.address.countrySecondarySubdivision,
        countrySubdivision: result.address.countrySubdivision,
        countrySubdivisionName: result.address.countrySubdivisionName,
        countrySubdivisionCode: result.address.countrySubdivisionCode,
        state: result.address.countrySubdivision,
        postalCode: result.address.postalCode,
      }));
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const errResponse = error as { response: { status: number; data: unknown } };
        console.error('TomTom API error:', errResponse.response.status, errResponse.response.data);
      } else {
        console.error('Unexpected error:', error);
      }
      return [];
    }
  }
}
