function About() {
  return (
    <main className="about">
      <section className="about-content">
        <p className="section-label">ABOUT ME</p>

        <h1>A little about me</h1>

        <p>
          I'm a Computer Science student with an interest in programming,
          web development, and technology. I enjoy learning by building
          projects and experimenting with new ideas.
        </p>

        <p>
          I'm currently developing my skills in languages and technologies
          such as C, Java, JavaScript, React, and Git while working on
          academic and personal projects.
        </p>

        <div className="skills">
          <h2>Technologies I'm learning</h2>

          <div className="skill-list">
            <span>C</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML & CSS</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;