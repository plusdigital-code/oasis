import { MandateListingModule } from './mandate-listing.module';

describe('MandateListingModule', () => {
  let mandateListingModule: MandateListingModule;

  beforeEach(() => {
    mandateListingModule = new MandateListingModule();
  });

  it('should create an instance', () => {
    expect(mandateListingModule).toBeTruthy();
  });
});
