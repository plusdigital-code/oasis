import { CommercialBrochuresModule } from './commercial-brochures.module';

describe('CommercialBrochuresModule', () => {
  let commercialBrochuresModule: CommercialBrochuresModule;

  beforeEach(() => {
    commercialBrochuresModule = new CommercialBrochuresModule();
  });

  it('should create an instance', () => {
    expect(commercialBrochuresModule).toBeTruthy();
  });
});
