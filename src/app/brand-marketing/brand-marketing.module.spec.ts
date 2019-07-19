import { BrandMarketingModule } from './brand-marketing.module';

describe('BrandMarketingModule', () => {
  let brandMarketingModule: BrandMarketingModule;

  beforeEach(() => {
    brandMarketingModule = new BrandMarketingModule();
  });

  it('should create an instance', () => {
    expect(brandMarketingModule).toBeTruthy();
  });
});
