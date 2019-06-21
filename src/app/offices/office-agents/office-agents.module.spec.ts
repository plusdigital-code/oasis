import { OfficeAgentsModule } from './office-agents.module';

describe('OfficeAgentsModule', () => {
  let officeAgentsModule: OfficeAgentsModule;

  beforeEach(() => {
    officeAgentsModule = new OfficeAgentsModule();
  });

  it('should create an instance', () => {
    expect(officeAgentsModule).toBeTruthy();
  });
});
