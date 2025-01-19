import './App.css'
import ContentList from './components/content/ContentList'
import ContentPage from './components/content/ContentPage'
import Helper from './components/helper/Helper'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return(
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ContentPage />}/>
            <Route path="/workstation" element={<Helper />}/>
            <Route path="/profile" element={<ContentPage />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App


/*
<Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
*/