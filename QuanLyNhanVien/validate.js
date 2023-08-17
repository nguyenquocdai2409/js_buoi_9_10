//hợp lệ => return true

function kiemTraRong(idErr, value) {
    //lỗi
    if (value.trim().length == 0) {
        document.getElementById("tbTKNV").style.display = "block";
        document.getElementById("tbTen").style.display = "block";
        document.getElementById("tbEmail").style.display = "block";
        document.getElementById("tbMatKhau").style.display = "block";
        document.getElementById("tbNgay").style.display = "block";
        document.getElementById("tbLuongCB").style.display = "block";
        document.getElementById("tbGiolam").style.display = "block";
        document.getElementById(idErr).innerText = "Nội dung không được để trống";
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}
function kiemTraDoDai(min, max, idErr, value) {
    //trim : remove khoang trang
    var length = value.trim().length;
    if (length < min || length > max) {
        document.getElementById(idErr).innerText = `Nội dung phải từ ${min} đến ${max} kí tự`;
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}
function kiemTraEmail(idErr, value) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(value)) {
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById("tbEmail").style.display = "block";
        document.getElementById(idErr).innerText = "Email không hợp lệ";
        return false;
    }
}
function kiemTraChu(idErr, value) {
    var re = new RegExp("^[A-Za-z]+$");
    if (re.test(value)) {
        document.getElementById("tbTen").style.display = "block";
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById("tbTen").style.display = "block";
        document.getElementById(idErr).innerText = "Tên phải là chữ";
        return false;
    }
}
function kiemTraMatKhau(idErr, value) {
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})");
    if (mediumRegex.test(value)) {
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById("tbMatKhau").style.display = "block";
        document.getElementById(idErr).innerText = "Mật khẩu phải có từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
        return false;
    }
}
function kiemTraNgay(idErr, value) {
    var re = /^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/;
    if (re.test(value)) {
        document.getElementById(idErr).innerText = "";
        return true;
    } else
    document.getElementById("tbNgay").style.display = "block";
    document.getElementById(idErr).innerText = "Định dạng ngày phải là MM/DD/YYYY";
        return false;
}
function kiemTraLuong(min, max, idErr, value) {
    //trim : remove khoang trang
    var number = value.trim();
    if (number < min || number > max) {
        document.getElementById(idErr).innerText = `Lương cơ bản từ ${min} đến ${max}`;
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}
function kiemTraSelect(index){
    var select = document.getElementById("chucvu");
    if(select.selectedIndex == 0){
        document.getElementById("tbChucVu").style.display = "block";
        document.getElementById(index).innerText = "Vui lòng chọn chức vụ";
        return false;
    } else {
        document.getElementById(index).innerText = "";
        return true;
    }
}
function kiemTraGioLam(min, max, idErr, value) {
    //trim : remove khoang trang
    var number = value.trim();
    if (number < min || number > max) {
        document.getElementById(idErr).innerText = `Số giờ làm phải từ ${min} đến ${max} trong tháng`;
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}
function kiemTraDuLieuLaSo(idErr, inputValue){
    var number = /^[0-9]+$/;
    if(inputValue.match(number)){
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById("tbLuongCB").style.display = "block";
        document.getElementById("tbGiolam").style.display = "block";
        document.getElementById(idErr).innerText = "Trường dữ liệu này phải là số";
        return false;
    }
}