import User from '../schemas/index.js';

export const deleteAllUsersUseCase = async (req, res) => {
  const { deletedCount }  = await User.deleteMany();
  return res.status(200).json({ 'deletedCount': deletedCount});
};
