import { CommercialWebModule } from './commercial-web.module';

describe('CommercialWebModule', () => {
  let commercialWebModule: CommercialWebModule;

  beforeEach(() => {
    commercialWebModule = new CommercialWebModule();
  });

  it('should create an instance', () => {
    expect(commercialWebModule).toBeTruthy();
  });
});
