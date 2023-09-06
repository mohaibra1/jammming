import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Playlist from './Playlist';

describe('Playlist', () => {
  let props;
  let shallowPlaylist;
  let renderedPlaylist;
  let mountedPlaylist;

  const shallowTestComponent = () => {
    if (!shallowPlaylist) {
      shallowPlaylist = shallow(<Playlist {...props} />);
    }
    return shallowPlaylist;
  };

  const renderTestComponent = () => {
    if (!renderedPlaylist) {
      renderedPlaylist = render(<Playlist {...props} />);
    }
    return renderedPlaylist;
  };

  const mountTestComponent = () => {
    if (!mountedPlaylist) {
      mountedPlaylist = mount(<Playlist {...props} />);
    }
    return mountedPlaylist;
  };  

  beforeEach(() => {
    props = {};
    shallowPlaylist = undefined;
    renderedPlaylist = undefined;
    mountedPlaylist = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
