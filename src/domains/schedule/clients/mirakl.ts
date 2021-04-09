const axios = require('axios');

const miraklClient = async () => {
  try {
    return await axios.post('http://localhost:8900/mirakl/get');
  } catch (error) {
    console.error(error);
  }
};

export { miraklClient };
