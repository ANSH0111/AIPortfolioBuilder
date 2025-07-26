import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import FormPanel from "./components/FormPanel";
import PreviewPanel from "./components/FormPanel"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <ThemeToggle />

      <main className="flex flex-col lg:flex-row flex-grow">
        <FormPanel />
        <PreviewPanel />
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
