import axios from 'axios';

const callApi=async ()=>{
  const response=await axios.get('https://randomuser.me/api');
  localStorage.setItem("data",JSON.stringify(response.data));
}
export default callApi;