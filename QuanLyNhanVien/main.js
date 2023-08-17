var dsnv = [];
var jsondata = localStorage.getItem("DSNV");
if (jsondata != null) {
    var list = JSON.parse(jsondata);
    dsnv = list.map(function (item) {
        return new NhanVien(item.taikhoan, item.ten, item.email, item.matkhau, item.ngaylam, item.luongcoban, item.chucvu, item.giolam);
    });
    renderNv(dsnv);
}
function themNguoiDung() {
    var nv = layThongTinTuForm();
    // start validate
    //tenSV
    var isValidTaiKhoan = kiemTraRong("tbTKNV", nv.taikhoan) && kiemTraDoDai(4, 6, "tbTKNV", nv.taikhoan);
    var isValidTen = kiemTraRong("tbTen", nv.ten) && kiemTraChu("tbTen", nv.ten);
    var isValidEmail = kiemTraRong("tbEmail", nv.email) && kiemTraEmail("tbEmail", nv.email);
    var isValidMatKhau = kiemTraRong("tbMatKhau", nv.matkhau) && kiemTraMatKhau("tbMatKhau", nv.matkhau);
    var isValidNgayLam = kiemTraRong("tbNgay", nv.ngaylam) && kiemTraNgay("tbNgay", nv.ngaylam);
    var isValidLuong = kiemTraRong("tbLuongCB", nv.luongcoban) && kiemTraLuong(1000000, 20000000, "tbLuongCB", nv.luongcoban) && kiemTraDuLieuLaSo("tbLuongCB", nv.luongcoban);
    var isValidChonChucVu = kiemTraRong("tbChucVu", nv.chucvu) && kiemTraSelect("tbChucVu", nv.chucvu);
    var isValidGioLam = kiemTraRong("tbGiolam", nv.giolam) && kiemTraGioLam(80, 200, "tbGiolam", nv.giolam) && kiemTraDuLieuLaSo("tbGiolam", nv.giolam);
    //
    var isValid = isValidTaiKhoan & isValidTen & isValidEmail & isValidMatKhau & isValidNgayLam & isValidLuong & isValidChonChucVu & isValidGioLam;
    if (!isValid) return;
    // nếu ko hợp lệ thì dừng tại dòng tren
    // end validate
    dsnv.push(nv);
    renderNv(dsnv);
    var jsondata = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", jsondata);
}
function xoaNv(id) {
    var index = timViTri(id, dsnv);
    dsnv.splice(index, 1);
    renderNv(dsnv);
    var jsondata = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", jsondata);
}
function suaNv(id) {
    var index = timViTri(id, dsnv);
    var nv = dsnv[index];
    document.getElementById("btnThem").click();
    showThongTinLenForm(nv);
    document.getElementById("tknv").disabled = true;
    var jsondata = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", jsondata);
}
function capNhatNhanVien() {
    var nv = layThongTinTuForm();
    var index = timViTri(nv.taikhoan, dsnv);
    dsnv[index] = nv;
    // start validate
    //tenSV
    var isValidTaiKhoan = kiemTraRong("tbTKNV", nv.taikhoan) && kiemTraDoDai(4, 6, "tbTKNV", nv.taikhoan);
    var isValidTen = kiemTraRong("tbTen", nv.ten) && kiemTraChu("tbTen", nv.ten);
    var isValidEmail = kiemTraRong("tbEmail", nv.email) && kiemTraEmail("tbEmail", nv.email);
    var isValidMatKhau = kiemTraRong("tbMatKhau", nv.matkhau) && kiemTraMatKhau("tbMatKhau", nv.matkhau);
    var isValidNgayLam = kiemTraRong("tbNgay", nv.ngaylam) && kiemTraNgay("tbNgay", nv.ngaylam);
    var isValidLuong = kiemTraRong("tbLuongCB", nv.luongcoban) && kiemTraLuong(1000000, 20000000, "tbLuongCB", nv.luongcoban) && kiemTraDuLieuLaSo("tbLuongCB", nv.luongcoban);
    var isValidChonChucVu = kiemTraRong("tbChucVu", nv.chucvu) && kiemTraSelect("tbChucVu", nv.chucvu);
    var isValidGioLam = kiemTraRong("tbGiolam", nv.giolam) && kiemTraGioLam(80, 200, "tbGiolam", nv.giolam) && kiemTraDuLieuLaSo("tbGiolam", nv.giolam);
    //
    var isValid = isValidTaiKhoan & isValidTen & isValidEmail & isValidMatKhau & isValidNgayLam & isValidLuong & isValidChonChucVu & isValidGioLam;
    if (!isValid) return;
    // nếu ko hợp lệ thì dừng tại dòng tren
    // end validate
    renderNv(dsnv);
    var jsondata = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", jsondata);
}
function timNhanVien() {
    var input, filter, tbody, tr, a, i, txtValue;
    input = document.getElementById('searchName');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("tableDanhSach");
    tr = tbody.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      a = tr[i].getElementsByTagName("td")[6];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
}