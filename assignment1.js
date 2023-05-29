function fetchData() {
    return new Promise((resolve, reject) => {
      
      const data = { message: 'successful' };
      resolve(data);
      
      //reject(new Error('Failed to fetch data'));
    });
  }
  
  
  //console.log('Start');
  
  fetchData()
    .then((data) => {
      console.log(data.message);
      
    })
    .catch((error) => {
      console.error(error.message);
      
    });
  
  
  