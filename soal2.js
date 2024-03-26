const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 2000);
};

const getCallback = (error, month) => {
  if (!error) {
    month.map((item) => console.log(item));
  } else {
    return console.log(error.message, []);
  }
};

getMonth(getCallback);
