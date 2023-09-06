import React from 'react';
import PropTypes from 'prop-types';
import styles from './Track.scss';

const Track = props => (
	<div>This is a component called Track.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Track extends React.Component {
//   render() {
//     return <div>This is a component called Track.</div>;
//   }
// }

const TrackPropTypes = {
	// always use prop types!
};

Track.propTypes = TrackPropTypes;

export default Track;
