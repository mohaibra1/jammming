import React from 'react';
import   './SearchBar.css';



const SearchBar = props => {
	return (
		<div className='searchbar'>
			<input className='input' type='text' onChange={props.onChange} placeholder='Enter A Song Title' />
			<button type='submit' className='button'>Search</button>
		</div>
	
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class SearchBar extends React.Component {
//   render() {
//     return <div>This is a component called SearchBar.</div>;
//   }
// }


export default SearchBar;
