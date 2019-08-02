import { CommercialContractsModule } from './commercial-contracts.module';

describe('CommercialContractsModule', () => {
  let commercialContractsModule: CommercialContractsModule;

  beforeEach(() => {
    commercialContractsModule = new CommercialContractsModule();
  });

  it('should create an instance', () => {
    expect(commercialContractsModule).toBeTruthy();
  });
});
