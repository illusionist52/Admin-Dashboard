import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://usmanmogal2:lZWgA0ifVdCKNit6@cluster0.cg8e76y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Db connected")
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDb is already connected");
//   }

//   try {
//     await mongoose.connect("mongodb+srv://usmanmogal2:lZWgA0ifVdCKNit6@cluster0.cg8e76y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//       dbName: "Dashboard",
//     });

//     isConnected = true;

//     console.log("Connected to Db!");
//   } catch (error) {
//     console.log("Error occured - ", error);
//   }
// };