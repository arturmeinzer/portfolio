import React from "react";

const ProjectCard = ({project}) => {
    return (
        <div className="card subtle-shadow no-border">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text fs-2">{project.content}</p>
            </div>
            <div className="card-footer no-border">
                {project.techStack && project.techStack.map((item, index) => {
                    return <small key={index} className="text-muted">{item}</small>;
                })}
            </div>
        </div>
    );
}

export default ProjectCard;
