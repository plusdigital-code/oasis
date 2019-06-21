import { OfficeStockModule } from './office-stock.module';

describe('OfficeStockModule', () => {
  let officeStockModule: OfficeStockModule;

  beforeEach(() => {
    officeStockModule = new OfficeStockModule();
  });

  it('should create an instance', () => {
    expect(officeStockModule).toBeTruthy();
  });
});
