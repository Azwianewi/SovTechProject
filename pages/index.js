import Head from "next/head";
import Navbar from "../componets/Navbar";
import styles from "../styles/Home.module.css";
import HomePage from "./homePage";
import Skills from "./skills";
import About from "./about";
import Resume from "./resume";
import Contact from "./contact";
import Footer from "../componets/Footer"

export default function Home() {
  return (
   <div className={styles.container}>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
     <Navbar />
     <HomePage />
     <About />
     <Skills />
     <Resume />
     <Contact/>
     <Footer />
  </div>
  )
}
