import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './routes'
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'

function App() {

  return (
    <>
      <Navigation />

      <Routes />

      <Footer />
    </>
  )
}

export default App;
