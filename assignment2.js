// Async function using await
async function AsyncFunction() {
    try {
      const result = await Promise.resolve('Async operation complete');
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Using the async function
  AsyncFunction();
  