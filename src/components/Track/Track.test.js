import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Track from './Track';

describe('Track', () => {
  let props;
  let shallowTrack;
  let renderedTrack;
  let mountedTrack;

  const shallowTestComponent = () => {
    if (!shallowTrack) {
      shallowTrack = shallow(<Track {...props} />);
    }
    return shallowTrack;
  };

  const renderTestComponent = () => {
    if (!renderedTrack) {
      renderedTrack = render(<Track {...props} />);
    }
    return renderedTrack;
  };

  const mountTestComponent = () => {
    if (!mountedTrack) {
      mountedTrack = mount(<Track {...props} />);
    }
    return mountedTrack;
  };  

  beforeEach(() => {
    props = {};
    shallowTrack = undefined;
    renderedTrack = undefined;
    mountedTrack = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
