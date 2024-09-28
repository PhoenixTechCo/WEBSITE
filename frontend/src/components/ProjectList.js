import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/api.js';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Our Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <p>Client: {project.client}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
