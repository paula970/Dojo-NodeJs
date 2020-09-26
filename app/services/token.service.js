const axios = require("axios").default;
const qs = require("querystring");
 
const config = {
   headers: {
       "Content-Type": "application/x-www-form-urlencoded",
   },
};
 
let token = "";
 
const getToken = async() => {
   let token;
   const promise = await axios
       .post(
           "https://accounts.spotify.com/api/token",
           qs.stringify({
               grant_type: "client_credentials",
               client_id: "1ee8814d109946cbb3c9c418136bd476",
               client_secret: "d97ffaba46104a0caf21e4f003032347",
           }),
           config
       )
   token = promise.data;
   return token.access_token;
}
 
module.exports = getToken;