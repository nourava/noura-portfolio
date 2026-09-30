function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="intro">Hello, I'm</p>

        <h1>Noura V A</h1>

        <h2>Computer Science Student</h2>

        <p className="description">
          I'm interested in technology, programming, and building projects
          that turn ideas into practical solutions. I'm continuously learning
          and exploring new areas of computer science.
        </p>

        <div className="buttons">
          <a href="/projects" className="primary-btn">
            View My Projects
          </a>

          <a href="/contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;