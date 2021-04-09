const axios = require('axios');

const matrixClient = async () => {
  try {
    return await axios
      .get(
        'https://api.neoscan.http://localhost:8901/matrix/getio/api/main_net/v1/get_all_nodes',
      )
      .then(data => JSON.parse(data))
      .catch(err => console.log(err));
  } catch (error) {
    console.error(error);
  }
};

export { matrixClient };
