import React from 'react';
import PropTypes from 'prop-types';
import styles from './Playlist.scss';

const Playlist = props => (
	<div>This is a component called Playlist.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Playlist extends React.Component {
//   render() {
//     return <div>This is a component called Playlist.</div>;
//   }
// }

const PlaylistPropTypes = {
	// always use prop types!
};

Playlist.propTypes = PlaylistPropTypes;

export default Playlist;
