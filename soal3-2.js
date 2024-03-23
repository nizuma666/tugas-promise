const getPost = (method, url) => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const hasil = JSON.parse(ajax.responseText);
        resolve(hasil);
      } else {
        const err = "ada error bro...";
        reject(err);
      }
    };
  });
};

const startApp = async () => {
  try {
    const resultPost = await getPost(
      "GET",
      "http://universities.hipolabs.com/search?country=Indonesia"
    );
    const getName = resultPost.map((item) => {
      return item.name;
    });
    const limit = getName.filter((el) => {
      return el.toLowerCase().includes("muhammadiyah");
    });
    for (const i of limit) {
      console.log(i);
    }
  } catch (error) {
    console.log(error);
  }
};

startApp();
