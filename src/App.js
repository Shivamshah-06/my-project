
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Section from './components/Section'
import Fleet from './components/Fleet'
import Maintain from './components/Maintain'
import { HashRouter ,Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
     
<HashRouter  >

<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/track' element={<Section/>}/>
  <Route path='/maintain' element={<Maintain/>}/>
  <Route path='/fleet' element={<Fleet/>}/>
  <Route path='/new' element={<Registration/>}/>
  <Route path='/log' element={<Login/>}/>
</Routes>
</HashRouter>
    </div>
  );
}

export default App;
