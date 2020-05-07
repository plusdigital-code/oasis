import { ViewingsModule } from './viewings.module';

describe('ViewingsModule', () => {
  let viewingsModule: ViewingsModule;

  beforeEach(() => {
    viewingsModule = new ViewingsModule();
  });

  it('should create an instance', () => {
    expect(viewingsModule).toBeTruthy();
  });
});
