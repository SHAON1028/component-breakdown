
import './App.css'
import Booklist from './components/BookList';
import Header from './components/Header'
import SearchBar from './components/Search'

function App() {
 

  return (
    <div className="container mx-auto p-4">
      <Header text={"Boimela"} />
      <SearchBar />
      <Booklist/>
    </div>
  );
}

export default App
