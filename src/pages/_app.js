import "tt/styles/globals.css"
import { AuthContextProvider } from "tt/context/AuthContext"

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
