import './App.css';
import Router1 from './router/Router1';
import Provider from './contexto/Provider';

function App() {
  return (
    <>
    <Provider>
      <Router1 />
    </Provider>
    </>
  );
}

export default App;
