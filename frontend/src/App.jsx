import { useState } from 'react';
import ViewProducts from './components/ViewProducts';
import AddProducts from './components/AddProducts';
import './App.css';
import Header from './components/header/Header';

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleAddProducts = () => {
    setCurrentComponent(<AddProducts />);
  };

  const handleViewProducts = () => {
    setCurrentComponent(<ViewProducts />);
  };

  return (
    <>
      <div>{/* <Header /> */}</div>

      <div className="card">
        <button onClick={handleAddProducts}>Add Products</button>
        <button onClick={handleViewProducts}>View Products</button>
      </div>
      {currentComponent}
    </>
  );
}

export default App;
