import 'tailwindcss/tailwind.css'
import { AppProvider } from "../src/data/context/AppContext"
import { AuthProvider } from "../src/data/context/AuthContext"
import { ImageProvider } from '../src/data/context/ImageContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <AppProvider>
      <ImageProvider>
      <Component {...pageProps} />
      </ImageProvider>
    </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
