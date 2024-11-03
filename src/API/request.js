import axios from "axios";
export let data = [];
export async function getdata(url) {
  try {
    const response = await axios.get(url);
    data.push(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export async function setUserData(url, data) {
  try {
    const response = await axios.post(url, data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
