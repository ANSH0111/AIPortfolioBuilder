import { useState } from "react";
//Importing Components

import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import FormPanel from "./components/FormPanel";
import PreviewPanel from "./components/PreviewPanel"
import Footer from "./components/Footer"

//Main App Component
function App() {
  const[formData,setFormData] = useState({
    name: "",
    bio: "",
    skills: [],
    projects: [],
    social: {
      github: "",
      linkedin: "",
      twitter: ""
    }
  });
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <ThemeToggle />

      <main className="flex flex-col lg:flex-row flex-grow">
        <FormPanel formData = {formData} setFormData= {setFormData}/>
        <PreviewPanel formdata = {formData}/>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
