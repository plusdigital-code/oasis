import { WebsitelistingModule } from './websitelisting.module';

describe('WebsitelistingModule', () => {
  let websitelistingModule: WebsitelistingModule;

  beforeEach(() => {
    websitelistingModule = new WebsitelistingModule();
  });

  it('should create an instance', () => {
    expect(websitelistingModule).toBeTruthy();
  });
});
