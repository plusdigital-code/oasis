import { MandateToolsModule } from './mandate-tools.module';

describe('MandateToolsModule', () => {
  let mandateToolsModule: MandateToolsModule;

  beforeEach(() => {
    mandateToolsModule = new MandateToolsModule();
  });

  it('should create an instance', () => {
    expect(mandateToolsModule).toBeTruthy();
  });
});
