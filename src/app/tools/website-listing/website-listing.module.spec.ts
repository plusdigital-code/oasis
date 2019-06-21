import { WebsiteListingModule } from './website-listing.module';

describe('WebsiteListingModule', () => {
  let websiteListingModule: WebsiteListingModule;

  beforeEach(() => {
    websiteListingModule = new WebsiteListingModule();
  });

  it('should create an instance', () => {
    expect(websiteListingModule).toBeTruthy();
  });
});
