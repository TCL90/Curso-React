import './App.css';
import Provider from './contexto/Provider';
import Router1 from './router/Router1';

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
