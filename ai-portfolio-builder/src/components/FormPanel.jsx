function FormPanel({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (

    <section className="p-4 border-r border-gray-300 w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Portfolio Info</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Short Bio</label>
          <textarea
            name="bio"
            className="w-full border rounded px-3 py-2"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">GitHub</label>
          <input
            type="text"
            name="github"
            className="w-full border rounded px-3 py-2"
            value={formData.social.github}
            onChange={(e) =>
              setFormData({
                ...formData,
                social: { ...formData.social, github: e.target.value }
              })
            }
          />
        </div>

        <div>
          <label className="block font-medium mb-1">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            className="w-full border rounded px-3 py-2"
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
          <label className="block font-medium mb-1">Skills</label>
          <div className="flex gap-2 flex-wrap">
            {formData.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 px-2 py-1 rounded-full">
                {skill}
                <button
                  className="ml-1 text-red-500"
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
            className="w-full border rounded px-3 py-2 mt-2"
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
        {/* Projects */}
        <div className="mt-4">
          <label className="block font-medium mb-1">Projects</label>
          {formData.projects.map((project, index) => (
            <div key={index} className="border p-2 mb-2 rounded">
              <input
                type="text"
                placeholder="Project Title"
                className="w-full border rounded px-2 py-1 mb-1"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...formData.projects];
                  newProjects[index].title = e.target.value;
                  setFormData({ ...formData, projects: newProjects });
                }}
              />
              <textarea
                placeholder="Project Description"
                className="w-full border rounded px-2 py-1"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...formData.projects];
                  newProjects[index].description = e.target.value;
                  setFormData({ ...formData, projects: newProjects });
                }}
              />
              <button
                className="text-sm text-red-600 mt-1"
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
            className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
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
    </section>
  );
}

export default FormPanel