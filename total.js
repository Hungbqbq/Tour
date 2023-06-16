// // Khởi tạo số lượng và đơn giá ban đầu
// let quantify = 0;
// const price = 20000000;

// function tinhTongTien() {
//   return  quantify* price;
// }

// function tangSoLuong() {
//   quantify++;
//   hienThiThongTin();
// }

// function giamSoLuong() {
//   if (quantify > 0) {
//     quantify--;
//     hienThiThongTin();
//   } else {
//     console.log("Số lượng không thể nhỏ hơn 0.");
//   }
// }

// function hienThiThongTin() {
//   const soLuongElement = document.getElementById("quantify");
//   const tongTienElement = document.getElementById("total");

//   soLuongElement.innerText = quantify;
//   tongTienElement.innerText = `Tổng tiền: ${tinhTongTien()}`;
// }

// const plush = document.getElementById("plush");
// plush.addEventListener("click", tangSoLuong);

// const minus = document.getElementById("minus");
// minus.addEventListener("click", giamSoLuong);

// hienThiThongTin();
// Khởi tạo số lượng ban đầu
let soLuongNguoiLon = 0;
let soLuongTreEm = 0;
const donGiaNguoiLon = 20000000;
const donGiaTreEm = 5000000;

function tinhTongTien() {
  return soLuongNguoiLon * donGiaNguoiLon + soLuongTreEm * donGiaTreEm;
}

function tangSoLuongNguoiLon() {
  soLuongNguoiLon++;
  hienThiThongTin();
}

function giamSoLuongNguoiLon() {
  if (soLuongNguoiLon > 0) {
    soLuongNguoiLon--;
    hienThiThongTin();
  } else {
    console.log("Số lượng người lớn không thể nhỏ hơn 0.");
  }
}

function tangSoLuongTreEm() {
  soLuongTreEm++;
  hienThiThongTin();
}

function giamSoLuongTreEm() {
  if (soLuongTreEm > 0) {
    soLuongTreEm--;
    hienThiThongTin();
  } else {
    console.log("Số lượng trẻ em không thể nhỏ hơn 0.");
  }
}

function hienThiThongTin() {
  const soLuongNguoiLonElement = document.getElementById("quantify-nguoi-lon");
  const soLuongTreEmElement = document.getElementById("quantify-tre-em");
  const tongTienElement = document.getElementById("total");

  soLuongNguoiLonElement.innerText = soLuongNguoiLon;
  soLuongTreEmElement.innerText = soLuongTreEm;
  
  const tongTien = tinhTongTien();
  const tongTienFormatted = tongTien.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  tongTienElement.innerText = `Tổng tiền: ${tongTienFormatted}`;
}

const nutTangNguoiLon = document.getElementById("plush-nguoi-lon");
nutTangNguoiLon.addEventListener("click", tangSoLuongNguoiLon);

const nutGiamNguoiLon = document.getElementById("minus-nguoi-lon");
nutGiamNguoiLon.addEventListener("click", giamSoLuongNguoiLon);

const nutTangTreEm = document.getElementById("plush-tre-em");
nutTangTreEm.addEventListener("click", tangSoLuongTreEm);

const nutGiamTreEm = document.getElementById("minus-tre-em");
nutGiamTreEm.addEventListener("click", giamSoLuongTreEm);

hienThiThongTin();
