import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<>home</>}></Route>
        <Route path='/test' element={<>test</>}></Route>
      </Routes>
    </Router>
  )
}

export default App
