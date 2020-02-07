export const BASE_URL = "http://localhost:9090";
export const BASE_URL_USER = "/api/user";

export const header = () =>{
  return({
    'Content-type': 'application/json',
    'Authorization': `'Bearer ${localStorage.getItem('token')}`
  });
}