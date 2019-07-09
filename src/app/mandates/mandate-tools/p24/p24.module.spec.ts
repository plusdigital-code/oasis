import { P24Module } from './p24.module';

describe('P24Module', () => {
  let p24Module: P24Module;

  beforeEach(() => {
    p24Module = new P24Module();
  });

  it('should create an instance', () => {
    expect(p24Module).toBeTruthy();
  });
});
