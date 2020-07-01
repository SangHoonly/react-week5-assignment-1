import { setRegions, setCategories, checkRegion } from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';

describe('Action creators', () => {
  it('setRegions', () => {
    // given
    const regions = regionsFixture;
    // when
    const action = setRegions(regions);
    // then
    expect(action.type).toBe('setRegions');
    expect(action.payload.regions).toBe(regions);
  });

  it('setCategories', () => {
    // given
    const categories = categoriesFixture;
    // when
    const action = setCategories(categories);
    // then
    expect(action.type).toBe('setCategories');
    expect(action.payload.categories).toBe(categories);
  });

  it('checkRegion', () => {
    // given
    const checkedId = 1;
    // when
    const action = checkRegion(checkedId);
    // then
    expect(action.type).toBe('checkRegion');
    expect(action.payload.checkedId).toBe(checkedId);
  });
});
