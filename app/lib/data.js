import { Product, User } from "./models";
import { connectToDB } from "@/app/lib/utils";

export async function fetchUsers(q,page) {
  const regex = new RegExp(q,'i');

  const item_per_page= 2;
  try {
    await connectToDB();
    const count = await User.find({username: {$regex: regex}}).count()
    const users = await User.find({username:{$regex: regex}}).limit(item_per_page).skip(item_per_page * (page -1));
    console.log("Fetched users:", users);
    return {users,count};
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};


export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];