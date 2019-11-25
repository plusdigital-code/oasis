import { CommercialStockModule } from './commercial-stock.module';

describe('CommercialStockModule', () => {
  let commercialStockModule: CommercialStockModule;

  beforeEach(() => {
    commercialStockModule = new CommercialStockModule();
  });

  it('should create an instance', () => {
    expect(commercialStockModule).toBeTruthy();
  });
});
