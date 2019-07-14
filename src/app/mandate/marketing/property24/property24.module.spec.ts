import { Property24Module } from './property24.module';

describe('Property24Module', () => {
  let property24Module: Property24Module;

  beforeEach(() => {
    property24Module = new Property24Module();
  });

  it('should create an instance', () => {
    expect(property24Module).toBeTruthy();
  });
});
