const session = ~~[Math.random() * 12];
const login = (username, password) => {
  console.log("getting token...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "syaiful" && password == "ismail") {
        return resolve(username);
      } else {
        reject(new Error(`usernmae ${username} tidak ada`));
      }
    }, 2000);
  });
};

const getLogin = login("syaiful", "ismail")
getLogin.then((resolve)=>{
    console.log(`Selamat datang ${resolve}, berikut kode sessionnya : ${session}`);
}).catch((reject)=>{
    console.error(reject.message)
})


