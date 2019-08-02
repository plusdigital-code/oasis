import { CommercialLeadsModule } from './commercial-leads.module';

describe('CommercialLeadsModule', () => {
  let commercialLeadsModule: CommercialLeadsModule;

  beforeEach(() => {
    commercialLeadsModule = new CommercialLeadsModule();
  });

  it('should create an instance', () => {
    expect(commercialLeadsModule).toBeTruthy();
  });
});
