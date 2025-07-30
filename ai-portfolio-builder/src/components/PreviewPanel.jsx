import { motion } from "framer-motion";

function PreviewPanel({ formData }) {
  const { name, bio, social } = formData;
  return (
    <>
      <motion.section className="p-4 w-full lg:w-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300" initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }} >
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>

        {formData.profileImage && (
          <img
            src={formData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
        )}

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            {name || "Your Name"}
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {bio || "Your short bio will appear here."}
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {social.github && <p><a href={social.github} target="_blank">🔗 GitHub: {social.github}</a></p>}
            {social.linkedin && <p><a href={social.linkedin} target="_blank">🔗 LinkedIn: {social.linkedin}</a></p>}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Skills</h3>
          <div className="flex gap-2 flex-wrap">
            {formData.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-200 dark:bg-blue-700 text-gray-800 dark:text-white px-2 py-1 rounded"
              >
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
              <li
                key={i}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded p-2"
              >
                <h4 className="font-bold">{project.title || "Untitled Project"}</h4>
                <p>{project.description || "No description yet."}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

    </>
  );
}

export default PreviewPanel