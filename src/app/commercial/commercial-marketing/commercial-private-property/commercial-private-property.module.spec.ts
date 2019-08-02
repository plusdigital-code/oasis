import { CommercialPrivatePropertyModule } from './commercial-private-property.module';

describe('CommercialPrivatePropertyModule', () => {
  let commercialPrivatePropertyModule: CommercialPrivatePropertyModule;

  beforeEach(() => {
    commercialPrivatePropertyModule = new CommercialPrivatePropertyModule();
  });

  it('should create an instance', () => {
    expect(commercialPrivatePropertyModule).toBeTruthy();
  });
});
