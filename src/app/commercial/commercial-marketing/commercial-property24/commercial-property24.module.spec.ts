import { CommercialProperty24Module } from './commercial-property24.module';

describe('CommercialProperty24Module', () => {
  let commercialProperty24Module: CommercialProperty24Module;

  beforeEach(() => {
    commercialProperty24Module = new CommercialProperty24Module();
  });

  it('should create an instance', () => {
    expect(commercialProperty24Module).toBeTruthy();
  });
});
