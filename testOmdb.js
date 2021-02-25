const axios = require('axios');
require('dotenv').config()
const OMDB_API_KEY = process.env.OMDB_API_KEY

// console.log(OMDB_API_KEY);

async function hitOmdb() {
   try {
      const results = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY }&s=suburbia`)
     
   console.log(results.data)
  } catch (err) {
      console.log(err);
      }
   }

hitOmdb()