import { OfficeListingsModule } from './office-listings.module';

describe('OfficeListingsModule', () => {
  let officeListingsModule: OfficeListingsModule;

  beforeEach(() => {
    officeListingsModule = new OfficeListingsModule();
  });

  it('should create an instance', () => {
    expect(officeListingsModule).toBeTruthy();
  });
});
