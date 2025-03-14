import { AddressProvider } from '../core/interfaces/AddressProvider';
import { Address } from '../core/models/Address';

export class AddressService {
  private provider: AddressProvider;

  constructor(provider: AddressProvider) {
    this.provider = provider;
  }

  async getAddressSuggestions(query: string): Promise<Address[]> {
    const results = await this.provider.getAddressSuggestions(query);
    return results.filter((address) => address.country === 'Australia');
  }
}
