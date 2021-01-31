import './App.css';
import Header from './Components/Header/Header'
import Front from './Components/Front/Front'
import FrontVideos from './Components/Front/FrontVideos'
import Back from './Components/Back/Back'
import BackVideos from './Components/Back/BackVideos'
import Database from './Components/StackData/Database'
import DatabaseVideos from './Components/StackData/DatabaseVideos'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Front />
      <FrontVideos />
      <Back />
      <BackVideos />
      <Database />
      <DatabaseVideos />
      <Footer />
    </div>
  );
}

export default App;
