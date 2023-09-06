import SearchBar from './SearchBar';
import TrackListContainer from '../Tracklist/TrackListContainer';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';

const divCon = {
    display: 'flex',
    gap:'35px'

}


const SearchBarContainer = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
        <div>
            <SearchBar />
        </div>
       
    <div style={divCon}>
        <SearchResultsContainer />
        <TrackListContainer />
    </div>

        </div>
        
    )
}

export default SearchBarContainer;
