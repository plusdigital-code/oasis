import { CollateralModule } from './collateral.module';

describe('CollateralModule', () => {
  let collateralModule: CollateralModule;

  beforeEach(() => {
    collateralModule = new CollateralModule();
  });

  it('should create an instance', () => {
    expect(collateralModule).toBeTruthy();
  });
});
