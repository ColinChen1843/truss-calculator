import HomePage from './pages/homepage';
import CalculatorPage1 from './pages/calculatorpage1';
import CalculatorPage2 from './pages/calculatorpage2';
import CalculatorPage3 from './pages/calculatorpage3';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator1" element={<CalculatorPage1 />} />
        <Route path="/calculator2" element={<CalculatorPage2 />} />
        <Route path="/calculator3" element={<CalculatorPage3 />} />
     </Routes>
  </div>
  );
}

export default App;
