let a_side=parseInt(prompt('Nhap vao chieu dai canh a'));
let b_side=parseInt(prompt('Nhap vao chieu dai canh b'));
let c_side=parseInt(prompt('Nhap vao chieu dai canh c'));

if (a_side>0 && b_side>0 && c_side>0
    && (a_side+b_side)>c_side
    && b_side+c_side>a_side
    && c_side+a_side>b_side) {
    alert('3 so tren la canh cua mot tam giac');
} else{
    alert('3 so tren Khong phai la canh cua mot tam giac');
}