import { Component } from "react";

export class ProjectList extends Component {

  render() {

    const projects = this.props.projects

    return (
      <>
       {projects.map((project, index) => {
        return <img key={index} src={project.img}/>
       })}
      </>
    )
  }
}
