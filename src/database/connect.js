const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.xae6bez.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro ao conectar com o banco: ", error);
      }

      return console.log("Conexão com o banco realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
