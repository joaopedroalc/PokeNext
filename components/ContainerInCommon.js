import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function ContainerInCommon({children}){
  return(
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
        <title>PokeNext</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}