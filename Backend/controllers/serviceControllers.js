import Service from '../models/Service.js'

export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

export const createService = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const service = new Service({ name, description });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    next(error);
  }
};
