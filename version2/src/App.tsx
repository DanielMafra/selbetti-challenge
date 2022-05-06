import { FormProvider } from './contexts/FormContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { Loading } from './pages/Loading';
import { Completed } from './pages/Completed';
import './global.scss';

function App () {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormStep1 />} />
          <Route path="/solutions" element={<FormStep2 />} />
          <Route path="/creating" element={<Loading />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  )
}

export default App
