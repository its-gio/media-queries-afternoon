import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

export default class Portfolio extends Component {
  state = {
    projects: [
      { img: '../../img/Portfolio/01-thumbnail.jpg', client: 'Threads', category: 'Illustration', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: '../../img/Portfolio/02-thumbnail.jpg', client: 'Explore', category: 'Graphic Design', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: '../../img/Portfolio/03-thumbnail.jpg', client: 'Finish', category: 'Identity', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: '../../img/Portfolio/04-thumbnail.jpg', client: 'Lines', category: 'Branding', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: '../../img/Portfolio/05-thumbnail.jpg', client: 'Southwest', category: 'Website Design', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: '../../img/Portfolio/06-thumbnail.jpg', client: 'Window', category: 'Photography', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' }
    ]
  }

  render() {
    const projectMap = this.state.projects.map((project, i) => <ProjectItem project={project} key={i} />)

    return (
      <section className="section">
        <div className="section-title">
          <h3>Portfolio</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="projects--grid">
          { projectMap }
        </div>
      </section>
    )
  }
}
