import { useState } from "react";
import { useEffect } from "react";
//Importing Components

import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import FormPanel from "./components/FormPanel";
import PreviewPanel from "./components/PreviewPanel"
import Footer from "./components/Footer"

//Main App Component
function App() {
  const[formData,setFormData] = useState(()=>{
    const savedData = localStorage.getItem("portfolioData");
    return savedData ? JSON.parse(savedData) : {
      profileImage: "",
      name: "",
      bio: "",
      skills: [],
      projects: [],
      social: {
        github: "",
        linkedin: "",
        twitter: ""
      }
    }
  });


  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="flex justify-between items-center text-gray-800 p-4 dark:border-gray-700">
        <Header />
        <ThemeToggle />
      </div>

      <main className="flex flex-col lg:flex-row flex-grow">
        <FormPanel formData = {formData} setFormData= {setFormData}/>
        <PreviewPanel formData = {formData}/>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
