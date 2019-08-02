import { CommercialListingModule } from './commercial-listing.module';

describe('CommercialListingModule', () => {
  let commercialListingModule: CommercialListingModule;

  beforeEach(() => {
    commercialListingModule = new CommercialListingModule();
  });

  it('should create an instance', () => {
    expect(commercialListingModule).toBeTruthy();
  });
});
