import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`SERVER IS RUNNING AT http://localhost:${config.port}`);
    });
    await mongoose.connect(config.db_url as string);
  } catch (error) {
    console.log(error);
  }
}

main();
