import { PrivatePropertyModule } from './private-property.module';

describe('PrivatePropertyModule', () => {
  let privatePropertyModule: PrivatePropertyModule;

  beforeEach(() => {
    privatePropertyModule = new PrivatePropertyModule();
  });

  it('should create an instance', () => {
    expect(privatePropertyModule).toBeTruthy();
  });
});
