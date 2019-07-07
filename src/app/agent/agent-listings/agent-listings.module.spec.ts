import { AgentListingsModule } from './agent-listings.module';

describe('AgentListingsModule', () => {
  let agentListingsModule: AgentListingsModule;

  beforeEach(() => {
    agentListingsModule = new AgentListingsModule();
  });

  it('should create an instance', () => {
    expect(agentListingsModule).toBeTruthy();
  });
});
