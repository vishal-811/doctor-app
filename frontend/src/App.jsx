import Layout from './pages/Layout'
import Signup from './pages/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { RoleProvider } from './contexts/RoleContext';
import { Signin } from './pages/Signin';

function AppContent() {

  return (
    <div>
         <Routes>
             <Route path='/' element={<Layout/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/signin' element={<Signin/>}/>
         </Routes>
    </div>
  )
}


function App(){
    return(
       <RoleProvider>
        <Router>
           <AppContent/>
        </Router>
       </RoleProvider>
    )
}

export default App;
