import { ObiModule } from './obi.module';

describe('ObiModule', () => {
  let obiModule: ObiModule;

  beforeEach(() => {
    obiModule = new ObiModule();
  });

  it('should create an instance', () => {
    expect(obiModule).toBeTruthy();
  });
});
