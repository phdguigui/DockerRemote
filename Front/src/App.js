import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Troque a URL para seu endpoint do backend!
    fetch('https://localhost:7114/WeatherForecast')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error('Erro ao buscar dados:', err));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height: 200}} />
        <div>
          {data ? (
            <ul>
              {data.map((item, idx) => (
                <li key={idx}>
                  <strong>Data:</strong> {item.date} <br />
                  <strong>Temp (C):</strong> {item.temperatureC} <br />
                  <strong>Resumo:</strong> {item.summary}
                </li>
              ))}
            </ul>
          ) : (
            <p>Carregando dados...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;