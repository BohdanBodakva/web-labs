import './App.css';
import Layout from './Components/Layout/Layout';
import Hero from "./Components/hero/Hero";
import SecondSection from "./Components/second_section/SecondSection";


function App() {
  return (
    <>
      <Layout>
        <Hero />
        <SecondSection />
      </Layout>
    </>
  );
}

export default App;
