export interface Address {
  fullAddress: string;
  country: string;
  countryCode: string;
  countryCodeISO3: string;
  municipality: string;
  countrySecondarySubdivision?: string;
  countrySubdivision: string;
  countrySubdivisionName: string;
  countrySubdivisionCode: string;
  state: string;
  postalCode?: string;
}
