import { Address } from '../models/Address';

export interface AddressProvider {
  getAddressSuggestions(query: string): Promise<Address[]>;
}
