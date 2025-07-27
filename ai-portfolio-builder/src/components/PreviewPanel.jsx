function PreviewPanel({ formdata }) {
  const { name, bio, social } = formdata;
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
    </section>
  );
}

export default PreviewPanel