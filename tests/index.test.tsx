
import React from 'react';
import { shallow } from 'enzyme';
import FlexContainer from '../src';

describe('FlexContainer Component', () => {
  it('Renders component', () => {
    const link = shallow(<FlexContainer />);
    expect(link).toMatchSnapshot();
  });
});
