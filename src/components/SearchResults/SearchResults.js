import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';

const SearchResults = props => (
	<div>This is a component called SearchResults.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class SearchResults extends React.Component {
//   render() {
//     return <div>This is a component called SearchResults.</div>;
//   }
// }

const SearchResultsPropTypes = {
	// always use prop types!
};

SearchResults.propTypes = SearchResultsPropTypes;

export default SearchResults;
