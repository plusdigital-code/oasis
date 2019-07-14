import { ShowingsModule } from './showings.module';

describe('ShowingsModule', () => {
  let showingsModule: ShowingsModule;

  beforeEach(() => {
    showingsModule = new ShowingsModule();
  });

  it('should create an instance', () => {
    expect(showingsModule).toBeTruthy();
  });
});
