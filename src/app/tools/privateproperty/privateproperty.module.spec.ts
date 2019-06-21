import { PrivatepropertyModule } from './privateproperty.module';

describe('PrivatepropertyModule', () => {
  let privatepropertyModule: PrivatepropertyModule;

  beforeEach(() => {
    privatepropertyModule = new PrivatepropertyModule();
  });

  it('should create an instance', () => {
    expect(privatepropertyModule).toBeTruthy();
  });
});
