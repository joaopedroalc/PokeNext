import ContainerInCommon from '../components/ContainerInCommon'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <ContainerInCommon>
      <Component {...pageProps} />
    </ContainerInCommon>
  )
}

export default MyApp
