import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  let props;
  let shallowSearchResults;
  let renderedSearchResults;
  let mountedSearchResults;

  const shallowTestComponent = () => {
    if (!shallowSearchResults) {
      shallowSearchResults = shallow(<SearchResults {...props} />);
    }
    return shallowSearchResults;
  };

  const renderTestComponent = () => {
    if (!renderedSearchResults) {
      renderedSearchResults = render(<SearchResults {...props} />);
    }
    return renderedSearchResults;
  };

  const mountTestComponent = () => {
    if (!mountedSearchResults) {
      mountedSearchResults = mount(<SearchResults {...props} />);
    }
    return mountedSearchResults;
  };  

  beforeEach(() => {
    props = {};
    shallowSearchResults = undefined;
    renderedSearchResults = undefined;
    mountedSearchResults = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
