import { AgentMarketingModule } from './agent-marketing.module';

describe('AgentMarketingModule', () => {
  let agentMarketingModule: AgentMarketingModule;

  beforeEach(() => {
    agentMarketingModule = new AgentMarketingModule();
  });

  it('should create an instance', () => {
    expect(agentMarketingModule).toBeTruthy();
  });
});
