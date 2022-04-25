import User from '../schemas/index.js';

export const retrieveUserUseCase = async ({ query }, res) => {
  const count = await User.countDocuments(query)
  const users = await User.find(query);
  return res.status(200).json({count, users});
};
