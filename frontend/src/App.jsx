import Layout from './pages/Layout'
import Signup from './pages/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { RoleProvider } from './contexts/RoleContext';
import { Signin } from './pages/Signin';
import Doctor from './pages/Doctor';
import EditProfile from './pages/EditProfile';

function AppContent() {

  return (
    <div className='min-h-screen'>
         <Routes>
             <Route path='/' element={<Layout/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/signin' element={<Signin/>}/>
             <Route path='/doctor' element={<Doctor/>}/>
             <Route path='/editprofile' element={<EditProfile/>}/>
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
