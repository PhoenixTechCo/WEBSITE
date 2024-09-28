import Team from '../models/Team.js';

export const getTeamMembers = async (req, res, next) => {
  try {
    const team = await Team.find();
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

export const createTeamMember = async (req, res, next) => {
  try {
    const { name, role, bio } = req.body;
    const teamMember = new Team({ name, role, bio });
    await teamMember.save();
    res.status(201).json(teamMember);
  } catch (error) {
    next(error);
  }
};
