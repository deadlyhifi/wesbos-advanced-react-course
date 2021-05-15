import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 31104000, // 60 * 60 * 24 * 360 - How long they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO - add seeding here
  },
  lists: createSchema({
    // TODO - schema items go in here
  }),
  ui: {
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
