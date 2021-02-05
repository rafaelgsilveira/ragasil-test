import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Background from "../components/background";

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Navbar/>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
