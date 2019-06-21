import { BrochuresModule } from './brochures.module';

describe('BrochuresModule', () => {
  let brochuresModule: BrochuresModule;

  beforeEach(() => {
    brochuresModule = new BrochuresModule();
  });

  it('should create an instance', () => {
    expect(brochuresModule).toBeTruthy();
  });
});
