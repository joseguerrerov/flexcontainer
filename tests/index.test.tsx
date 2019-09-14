import React from 'react';
import { shallow } from 'enzyme';
import FlexContainer from '../src';

describe('FlexContainer Component', () => {
  describe('Render', () => {
    it('renders without props', () => {
      const Component = shallow(<FlexContainer />);
      expect(Component).toMatchSnapshot();
    });

    it('renders with props', () => {
      const Component = shallow((
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flexWrap="nowrap"
          alignContent="center"
          flex={1}
          flexFlow="column"
          order={1}
          alignSelf="flex-end"
        >
          <p>Test</p>
        </FlexContainer>
      ));
      expect(Component).toMatchSnapshot();
    });
  });

  describe('Props', () => {
    it('sets children', () => {
      const Children = <p>Hola</p>;
      const Component = shallow((
        <FlexContainer>
          {Children}
        </FlexContainer>
      ));
      expect(Component.find('p')).toHaveLength(1);
    });

    it('sets flexDirection', () => {
      const Component = shallow(<FlexContainer flexDirection="column" />);
      expect(Component.props().style.flexDirection).toEqual('column');
    });

    it('sets justifyContent', () => {
      const Component = shallow(<FlexContainer justifyContent="flex-end" />);
      expect(Component.props().style.justifyContent).toEqual('flex-end');
    });

    it('sets alignItems', () => {
      const Component = shallow(<FlexContainer alignItems="flex-start" />);
      expect(Component.props().style.alignItems).toEqual('flex-start');
    });

    it('sets flexWrap', () => {
      const Component = shallow(<FlexContainer flexWrap="nowrap" />);
      expect(Component.props().style.flexWrap).toEqual('nowrap');
    });

    it('sets alignContent', () => {
      const Component = shallow(<FlexContainer alignContent="center" />);
      expect(Component.props().style.alignContent).toEqual('center');
    });

    it('sets flex', () => {
      const Component = shallow(<FlexContainer flex={2} />);
      expect(Component.props().style.flex).toEqual(2);
    });

    it('sets flexFlow', () => {
      const Component = shallow(<FlexContainer flexFlow="column" />);
      expect(Component.props().style.flexFlow).toEqual('column');
    });

    it('sets order', () => {
      const Component = shallow(<FlexContainer order={2} />);
      expect(Component.props().style.order).toEqual(2);
    });

    it('sets alignSelf', () => {
      const Component = shallow(<FlexContainer alignSelf="flex-end" />);
      expect(Component.props().style.alignSelf).toEqual('flex-end');
    });
  });
});
