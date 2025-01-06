
import axios from "axios";
//get
export const fetchUserData = async (pageNumber) => {
  try {
    const response = await axios.get(
      `https://randomuser.me/api?page=${pageNumber}`
    );
    return response.data;
  }
  catch (err) {
    console.error("Error fetching data:", err);
  }

};



//create

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts", // API base URL
});

export const addPostApi = async (title, body) => {
  try {
    const response = await client.post("", { title, body });
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

//delete 
export const deletePostApi = async (id) => {
  try {
    await client.delete(`${id}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
