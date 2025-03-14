import { TomTomProvider } from '../infrastructure/providers/TomTomProvider';
import { AddressService } from '../application/AddressService';

const provider = new TomTomProvider();
const service = new AddressService(provider);

const query = process.argv[2];
if (!query) {
  console.log('Please enter an address query.');
  process.exit(1);
}

service.getAddressSuggestions(query).then(console.log);
