import { AuthProvider } from '../pages/lib/auth';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default App