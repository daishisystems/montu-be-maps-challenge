import { Address } from '../core/models/Address';

export class AddressValidator {
  static isValidAustralianAddress(address: Address): boolean {
    return address.country === 'Australia';
  }
}
