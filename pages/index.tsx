import { GspProvider } from "../context";
import { Navbar } from "../components/molecules";
import { Preview, Customize } from "../components/organisms";


export default function Home() {
  return (
    <>
      <GspProvider>
        <Navbar />
        <Preview />
        <Customize />
      </GspProvider>
    </>
  )
}
