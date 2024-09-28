import Project from '../models/Project.js';

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const { title, description, status, client } = req.body;
    const project = new Project({ title, description, status, client });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};
