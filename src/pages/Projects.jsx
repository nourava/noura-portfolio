function Projects() {
  const projects = [
    {
      title: "RouteHop",
      description:
        "A parcel transportation concept that uses existing bus networks to provide affordable and accessible parcel delivery.",
      tech: "React • JavaScript • Firebase",
    },
    {
      title: "AquaGuard",
      description:
        "A water-contamination logging and alert platform designed to help communities monitor and respond to water-quality issues.",
      tech: "React • JavaScript • GIS",
    },
    {
      title: "EcoTrace",
      description:
        "A project focused on using technology to organize and manage environmental information through a digital platform.",
      tech: "Web Development",
    },
  ];

  return (
    <main className="projects">
      <section className="projects-content">
        <p className="section-label">MY WORK</p>

        <h1>Projects I've worked on</h1>

        <p className="projects-intro">
          A collection of projects and ideas I've explored while learning
          computer science and web development.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.tech}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;