function PreviewPanel({ formData }) {
  const { name, bio, social } = formData;
  console.log("PreviewPanel rendered with formData:", formData);
  return (
    <section className="p-4 w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-blue-700">{name || "Your Name"}</h1>
        <p className="mt-2 text-gray-700">{bio || "Your short bio will appear here."}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          {social.github && <p>🔗 GitHub: {social.github}</p>}
          {social.linkedin && <p>🔗 LinkedIn: {social.linkedin}</p>}
        </div>
      </div>
      {/* Skills */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">Skills</h3>
        <div className="flex gap-2 flex-wrap">
          {formData.skills.map((skill, i) => (
            <span key={i} className="bg-blue-200 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Projects</h3>
        <ul className="space-y-2">
          {formData.projects.map((project, i) => (
            <li key={i} className="border rounded p-2">
              <h4 className="font-bold">{project.title || "Untitled Project"}</h4>
              <p>{project.description || "No description yet."}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

export default PreviewPanel