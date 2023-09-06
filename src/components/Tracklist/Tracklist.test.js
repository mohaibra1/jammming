import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Tracklist from './Tracklist';

describe('Tracklist', () => {
  let props;
  let shallowTracklist;
  let renderedTracklist;
  let mountedTracklist;

  const shallowTestComponent = () => {
    if (!shallowTracklist) {
      shallowTracklist = shallow(<Tracklist {...props} />);
    }
    return shallowTracklist;
  };

  const renderTestComponent = () => {
    if (!renderedTracklist) {
      renderedTracklist = render(<Tracklist {...props} />);
    }
    return renderedTracklist;
  };

  const mountTestComponent = () => {
    if (!mountedTracklist) {
      mountedTracklist = mount(<Tracklist {...props} />);
    }
    return mountedTracklist;
  };  

  beforeEach(() => {
    props = {};
    shallowTracklist = undefined;
    renderedTracklist = undefined;
    mountedTracklist = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
