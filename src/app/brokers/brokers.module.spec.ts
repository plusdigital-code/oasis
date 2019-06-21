import { BrokersModule } from './brokers.module';

describe('BrokersModule', () => {
  let brokersModule: BrokersModule;

  beforeEach(() => {
    brokersModule = new BrokersModule();
  });

  it('should create an instance', () => {
    expect(brokersModule).toBeTruthy();
  });
});
