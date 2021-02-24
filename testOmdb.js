const axios = require('axios');


axios.get("http://www.omdbapi.com/?s=freddy got fingered&apikey=b660e284")
.then(results => {
   console.log(results.data)
});

