let daftarNamaKota = ["Jakarta", "Bogor", "Depok"];

function tampilkanKota() {
  let daftar = document.getElementById("daftarKota");
  daftar.innerHTML = "";
  daftarNamaKota.forEach(kota => {
    let item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = kota;
    daftar.appendChild(item);
  });
}

function tambahKota() {
  let input = document.getElementById("inputKota");
  let namaBaru = input.value.trim();

  if (namaBaru !== "") {
    daftarNamaKota.push(namaBaru);
    tampilkanKota();
    input.value = "";
  } else {
    alert("Masukkan nama kota terlebih dahulu.");
  }
}

tampilkanKota();
