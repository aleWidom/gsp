import Head from "next/head";
import { GspProvider } from "../context";
import { Navbar } from "../components/molecules";
import { Preview, Customize } from "../components/organisms";
import useResponsive from '../hooks/useResponsive';
import styles from './Home.module.scss'

export default function Home() {


  const { isDesktop } = useResponsive();

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <GspProvider>
        {!isDesktop ?
          <>
            <div className={styles.navbarPreview}>
              <Navbar />
              <Preview />
            </div>
            <Customize />
          </> :
          <>
            <Navbar />
            <div className={styles.previewCustomize}>
              <Preview />
              <Customize />
            </div>
          </>}
      </GspProvider>
    </>
  )
}
