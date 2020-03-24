import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import img1 from '../../img/Portfolio/01-thumbnail.jpg';
import img2 from '../../img/Portfolio/02-thumbnail.jpg';
import img3 from '../../img/Portfolio/03-thumbnail.jpg';
import img4 from '../../img/Portfolio/04-thumbnail.jpg';
import img5 from '../../img/Portfolio/05-thumbnail.jpg';
import img6 from '../../img/Portfolio/06-thumbnail.jpg';

export default class Portfolio extends Component {
  state = {
    projects: [
      { img: img1, client: 'Threads', category: 'Illustration', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: img2, client: 'Explore', category: 'Graphic Design', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: img3, client: 'Finish', category: 'Identity', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: img4, client: 'Lines', category: 'Branding', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: img5, client: 'Southwest', category: 'Website Design', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' },
      { img: img6, client: 'Window', category: 'Photography', desc: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!' }
    ]
  }

  render() {
    const projectMap = this.state.projects.map((project, i) => <ProjectItem project={project} key={i} />)

    return (
      <section id="portfolio" className="section">
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
