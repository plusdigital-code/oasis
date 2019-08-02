import { CommercialMarketingModule } from './commercial-marketing.module';

describe('CommercialMarketingModule', () => {
  let commercialMarketingModule: CommercialMarketingModule;

  beforeEach(() => {
    commercialMarketingModule = new CommercialMarketingModule();
  });

  it('should create an instance', () => {
    expect(commercialMarketingModule).toBeTruthy();
  });
});
