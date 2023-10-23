import './App.css';

import Card from './components/Card';

function App() {
  const copyrightYear = new Date().getFullYear();
  return (
    <div className="App h-screen relative">
      <Card />
      <p className='text-sm absolute bottom-2 left-0 right-0 mx-auto'>© {copyrightYear} | Madeline Poniman</p>
    </div>
  );
}

export default App;
