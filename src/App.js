import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCharacters, changePage } from './state/actions'
import CharacterCard from './components/CharacterCard';

function App(props) {
  console.log(props)
  useEffect(() => {
    props.fetchCharacters()
  }, [])

const handlePages = (url) => {
  props.changePage(url)
}

  return (
    <div className="App">
      <h1>Rick & Morty!</h1>
      {props.previous && <button onClick={() => handlePages(props.previous)}>Previous</button>}
      {props.next && <button onClick={() => handlePages(props.next)}>Next</button>}
      {props.loading && <h1>LOADING.........</h1>}
      {props.results.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
}

const mapStateToProps = (storeState) => {
  // console.log(storeState)
  return {
    results: storeState.resultsState,
    laoding: storeState.loadingState,
    previous: storeState.infoState.prev,
    next: storeState.infoState.next
  };
};

export default connect(mapStateToProps, { fetchCharacters, changePage })(App);
