import { MandateModule } from './mandate.module';

describe('MandateModule', () => {
  let mandateModule: MandateModule;

  beforeEach(() => {
    mandateModule = new MandateModule();
  });

  it('should create an instance', () => {
    expect(mandateModule).toBeTruthy();
  });
});
