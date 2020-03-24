import React from 'react'

export default function ProjectItem(props) {
  return (
    <div className="projects--item">
      {console.log(props.project)}
      <img className="projects--item__img" src={props.project.img} alt={`${props.project.client}`}/>
      <div className="projects--item__content">
        <h4>{props.project.client}</h4>
        <p>{props.project.category}</p>
      </div>
    </div>
  )
}
