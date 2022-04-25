import User from '../schemas/index.js';

export async function createUserService(message, value) {
  console.log(value);
  const userCreated = await User.create(value);
  console.log(message);
  return true;
}
