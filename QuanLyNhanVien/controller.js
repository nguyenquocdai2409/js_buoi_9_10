function renderNv(dsnv) {
    var contentHTML = "";
    for (i = 0; i < dsnv.length; i++) {
        var data = dsnv[i];
        var contentTr = `<tr>
                                <td>${data.taikhoan}</td>
                                <td>${data.ten}</td>
                                <td>${data.email}</td>
                                <td>${data.ngaylam}</td>
                                <td>${data.chucvu}</td>
                                <td>${data.tinhTongLuong()}</td>
                                <td>${data.XepLoai()}</td>
                                <td>
                                <button onclick="suaNv('${data.taikhoan}')" class="btn btn-primary">Sửa</button>
                                <button onclick="xoaNv('${data.taikhoan}')" class="btn btn-danger">Xoá</button>
                                </td>
                            </tr>`
        contentHTML += contentTr;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function timViTri(id, dsnv) {
    var index = dsnv.findIndex(function (nv) {
        return nv.taikhoan == id;
    });
    return index;
}
function showThongTinLenForm(nv) {
    document.getElementById("tknv").value = nv.taikhoan;
    document.getElementById("name").value = nv.ten;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matkhau;
    document.getElementById("datepicker").value = nv.ngaylam;
    document.getElementById("luongCB").value = nv.luongcoban;
    document.getElementById("chucvu").value = nv.chucvu;
    document.getElementById("gioLam").value = nv.giolam;
}
function layThongTinTuForm() {
    var _taikhoan = document.getElementById("tknv").value;
    var _ten = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matkhau = document.getElementById("password").value;
    var _ngaylam = document.getElementById("datepicker").value;
    var _luongcoban = document.getElementById("luongCB").value;
    var _chucvu = document.getElementById("chucvu").value;
    var _giolam = document.getElementById("gioLam").value;
    var nv = new NhanVien(_taikhoan, _ten, _email, _matkhau, _ngaylam, _luongcoban, _chucvu, _giolam);
    return nv;
}
