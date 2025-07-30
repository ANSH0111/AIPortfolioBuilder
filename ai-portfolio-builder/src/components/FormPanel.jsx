import { motion } from "framer-motion";

function FormPanel({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (

    <section className="p-4 border-r border-gray-500 dark:border-gray-700 w-full lg:w-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4">Portfolio Info</h2>
      <div className="space-y-4">

        {/* Profile Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="profileImage"
            className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Upload Profile Image
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData({ ...formData, profileImage: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
            className="hidden"
          />
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input autoFocus
            type="text"
            name="name"
            className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-3 py-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Bio</label>
          <textarea
            name="bio"
            className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-3 py-2"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">GitHub</label>
          <input
            type="text"
            name="github"
            className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-3 py-2"
            value={formData.social.github}
            onChange={(e) =>
              setFormData({
                ...formData,
                social: { ...formData.social, github: e.target.value }
              })
            }
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-3 py-2"
            value={formData.social.linkedin}
            onChange={(e) =>
              setFormData({
                ...formData,
                social: { ...formData.social, linkedin: e.target.value }
              })
            }
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">Skills</label>
          <div className="flex gap-2 flex-wrap">
            {formData.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 dark:bg-blue-800 text-sm px-2 py-1 rounded-full text-gray-900 dark:text-white">
                {skill}
                <button
                  className="ml-1 text-red-500 dark:text-red-400"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      skills: formData.skills.filter((_, i) => i !== index),
                    })
                  }
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a skill and press Enter"
            className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-3 py-2 mt-2"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                e.preventDefault();
                setFormData({
                  ...formData,
                  skills: [...formData.skills, e.target.value.trim()],
                });
                e.target.value = "";
              }
            }}
          />
        </div>

        {/* Projects */}
        <div className="mt-4">
          <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">Projects</label>
          {formData.projects.map((project, index) => (
            <div key={index} className="border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 mb-2 rounded">
              <input
                type="text"
                placeholder="Project Title"
                className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-2 py-1 mb-1"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...formData.projects];
                  newProjects[index].title = e.target.value;
                  setFormData({ ...formData, projects: newProjects });
                }}
              />
              <textarea
                placeholder="Project Description"
                className="w-full border border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-2 py-1"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...formData.projects];
                  newProjects[index].description = e.target.value;
                  setFormData({ ...formData, projects: newProjects });
                }}
              />
              <button
                className="text-sm text-red-600 dark:text-red-400 mt-1"
                onClick={() => {
                  const newProjects = formData.projects.filter((_, i) => i !== index);
                  setFormData({ ...formData, projects: newProjects });
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="mt-2 px-3 py-1 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded"
            onClick={() =>
              setFormData({
                ...formData,
                projects: [...formData.projects, { title: "", description: "" }],
              })
            }
          >
            + Add Project
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={() => {
            localStorage.removeItem("portfolioData");
            setFormData({
              name: "",
              bio: "",
              skills: [],
              projects: [],
              profileImage: "",
              social: { github: "", linkedin: "", twitter: "" },
            });
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={() => {
            localStorage.setItem("portfolioData", JSON.stringify(formData));
            alert("Saved successfully!");
          }}
          className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
        >
          Save
        </button>
      </div>

    </section>

  );
}

export default FormPanel