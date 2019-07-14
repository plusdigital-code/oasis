import { ListingProfileModule } from './listing-profile.module';

describe('ListingProfileModule', () => {
  let listingProfileModule: ListingProfileModule;

  beforeEach(() => {
    listingProfileModule = new ListingProfileModule();
  });

  it('should create an instance', () => {
    expect(listingProfileModule).toBeTruthy();
  });
});
