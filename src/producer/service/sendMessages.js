import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();
const url = process.env['JSON_GENERATOR_URL'];
const token = process.env['JSON_GENERATOR_ACCESS_TOKEN'];

async function getUsers() {
  const response = await fetch(url, {
    method: 'Get',
    headers: { Authorization: `Bearer ${token}` }
  });

  const users = await response.json();
  return users;
}

export const sendMessage = async (
  { body: { timer, data }, producer },
  response
) => {
  console.log('-- Start sending message');
  let counter = 0;
  let users = data?.length > 0 ? data : await getUsers();

  const shutDownInterval = () => {
    console.log('-- Sending messages finished');
    return clearInterval(interValId);
  };

  const interValId = setInterval(() => {
    console.log('remaining messages:', users.length);
    let earliestUser = users.shift();
    if (users.length === 0) shutDownInterval();

    producer.send({
      topic: 'users',
      messages: [{ key: 'new-user', value: JSON.stringify(earliestUser) }]
    });

    counter++;
  }, timer);

  return response.status(204).send();
};
