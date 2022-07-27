import Navbar from "./navbar"
import contactUs from "./pages/Contact Us"
import Music from "./pages/Music"
import Sports from "./pages/Sports"
import Tech from "./pages/Tech"
import Home from "./pages/Home"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/music":
      Component = Music
      break
    case "/sports":
      Component = Sports
      break
    case "/tech":
      Component = Tech
      break
    case "/contact-us":
      Component = contactUs
      break
  }
  return (<>
  <Navbar />
  <Component />
  </>
  )
}

export default App
