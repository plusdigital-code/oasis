import { CommercialNotesModule } from './commercial-notes.module';

describe('CommercialNotesModule', () => {
  let commercialNotesModule: CommercialNotesModule;

  beforeEach(() => {
    commercialNotesModule = new CommercialNotesModule();
  });

  it('should create an instance', () => {
    expect(commercialNotesModule).toBeTruthy();
  });
});
