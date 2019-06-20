import { MandateLeadsModule } from './mandate-leads.module';

describe('MandateLeadsModule', () => {
  let mandateLeadsModule: MandateLeadsModule;

  beforeEach(() => {
    mandateLeadsModule = new MandateLeadsModule();
  });

  it('should create an instance', () => {
    expect(mandateLeadsModule).toBeTruthy();
  });
});
