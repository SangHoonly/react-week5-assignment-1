import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import AddressListContainer from './AddressListContainer';

import { addressList } from '../__fixture__/restaurants';

jest.mock('react-redux');

describe('AddressListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    dispatch.mockClear();
  });

  it('레스토랑 지역 목록이 로딩된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      addressList,
    }));

    const { getByText } = render((
      <AddressListContainer />
    ));

    expect(getByText('서울')).toBeInTheDocument();
  });

  context('지역 목록 중 하나의 버튼을 클릭하면', () => {
    it('selectAddress 액션이 전달된다.', () => {
      const { getByText } = render((
        <AddressListContainer />
      ));

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(selectAddress());
    });
  });
});
