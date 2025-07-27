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
      </div>
    </section>
  );
}

export default FormPanel