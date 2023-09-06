import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.scss';

const SearchBar = props => (
	<div>This is a component called SearchBar.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class SearchBar extends React.Component {
//   render() {
//     return <div>This is a component called SearchBar.</div>;
//   }
// }

const SearchBarPropTypes = {
	// always use prop types!
};

SearchBar.propTypes = SearchBarPropTypes;

export default SearchBar;
