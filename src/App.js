import Portfolio from './layout/Portfolio';
import Resume from './layout/Resume';
import Skills from './layout/Skills';
import Welcome from './layout/Welcome';
import globalStyles from './styles/globalStyles';

function App() {
  globalStyles();
  return (
    <div className="App">
      <Welcome />
      <Skills />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
