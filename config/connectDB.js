const mongoose = require("mongoose");

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.DB_URI);
    console.log(
      `MongoDB is connected. On PORT: ${DB.connection.port}. DBHost: ${DB.connection.host}. Name: ${DB.connection.name}`
        .green.bold.italic
    );
  } catch (error) {
    console.log(error.message.red.bold.italic);
    process.exit(1);
  }
};

module.exports = connectDB;
