import { CommercialShowingsModule } from './commercial-showings.module';

describe('CommercialShowingsModule', () => {
  let commercialShowingsModule: CommercialShowingsModule;

  beforeEach(() => {
    commercialShowingsModule = new CommercialShowingsModule();
  });

  it('should create an instance', () => {
    expect(commercialShowingsModule).toBeTruthy();
  });
});
