import express, { Request, Response, Application } from 'express';
import { TomTomProvider } from '../infrastructure/providers/TomTomProvider';
import { AddressService } from '../application/AddressService';

const app: Application = express(); // Explicitly define the Express application type
const port = 3000;

const provider = new TomTomProvider();
const service = new AddressService(provider);

app.get('/address', async (req: Request, res: Response): Promise<void> => {
  try {
    const query = req.query.q as string;

    if (!query) {
      res.status(400).json({ error: 'Missing query parameter' });
      return; // Ensure function always returns
    }

    const addresses = await service.getAddressSuggestions(query);
    res.json(addresses);
  } catch (error) {
    console.error('Error fetching address suggestions:', error); // ✅ Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
