import { ListingBrochuresModule } from './listing-brochures.module';

describe('ListingBrochuresModule', () => {
  let listingBrochuresModule: ListingBrochuresModule;

  beforeEach(() => {
    listingBrochuresModule = new ListingBrochuresModule();
  });

  it('should create an instance', () => {
    expect(listingBrochuresModule).toBeTruthy();
  });
});
