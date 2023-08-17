function NhanVien(_taikhoan, _ten, _email, _matkhau, _ngaylam, _luongcoban, _chucvu, _giolam) {
    this.taikhoan = _taikhoan;
    this.ten = _ten;
    this.email = _email;
    this.matkhau = _matkhau;
    this.ngaylam = _ngaylam;
    this.luongcoban = _luongcoban;
    this.chucvu = _chucvu;
    this.giolam = _giolam;
    this.tinhTongLuong = function () {
        if (this.chucvu == "Sếp") {
            return tinhTongLuong = this.luongcoban * 3;
        } else if (this.chucvu == "Trưởng phòng") {
            return tinhTongLuong = this.luongcoban * 2;
        } else {
            return tinhTongLuong = this.luongcoban * 1;
        }
    }
    this.XepLoai = function () {
        if (this.giolam >= 192) {
            return ("xuất sắc");
        } else if (this.giolam >= 176 && this.giolam < 192) {
            return ("giỏi");
        } else if (this.giolam >= 160 && this.giolam < 176) {
            return ("khá");
        } else {
            return ("trung bình");
        }
    }
}