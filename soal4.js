fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if(!response.ok){
       throw new Error('Ada masalah pada link')
    }
    return response.json()
  })
  .then(data => {
    data.map((item) => {
      console.log(`${item.id}. ${item.name}`);
    });
    // console.log("Data received:", data);
  })
  .catch((error) => {
    console.error(error.message);
  });
