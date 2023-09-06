import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tracklist.scss';

const Tracklist = props => (
	<div>This is a component called Tracklist.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Tracklist extends React.Component {
//   render() {
//     return <div>This is a component called Tracklist.</div>;
//   }
// }

const TracklistPropTypes = {
	// always use prop types!
};

Tracklist.propTypes = TracklistPropTypes;

export default Tracklist;
