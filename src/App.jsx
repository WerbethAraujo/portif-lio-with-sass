import Sidebar from './components/Sidebar';
import Maincontent from './components/Mainconten';

import './styles/components/app.sass';

function App() {
  return (
    <div className='app-container'>
      <h1>Werbeth Araújo</h1>
      <Sidebar />
      <Maincontent />
    </div>
  );
}

export default App;
