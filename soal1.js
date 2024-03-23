const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day.toLowerCase();
      });
      if (cek) {
        resolve(day);
      } else {
        reject(new Error(`Hari ${day} bukan hari kerja`));
      }
    }, 2000);
  });
};

//penerapan then catch
const karyawan = cekHariKerja("Selasa");
karyawan
  .then((resolve) => {
    console.log(`${resolve} adalah hari kerja anda `);
  })
  .catch((reject) => {
    console.log(reject.message);
  });
// pada kode diatas method then berfungsi untuk menjalankan program
// dengan menggunakan paramternya resolve, jika program yang dijalankan menghasilkan nilai false
// maka akan mengembalikan paramter reject dan menjalankan catch-nya

//penerapan try catch
// const karyawan = async () => {
//   try {
//     const result = await cekHariKerja("Selasa");
//     console.log(`hari ${result} adalah hari kerja anda`);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// karyawan();
// pada kode diatas, terdapat function karyawan yang dibuat menggunakan keyword async agar
//fungsi karyawan menjadi fungsi asynchronous
//kemudian digunakan blok try untuk menjalankan fungsi cekHariKerja,
//jika true maka akan menghasilkan output `hari ${result} adalah hari kerja anda`
//jika false maka akan dialihkan ke blok catch dan menampilkan pesan error
