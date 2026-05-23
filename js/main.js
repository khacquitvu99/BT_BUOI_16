const Display = document.getElementById("display");

//chuyen đổi dãy số thành từng phan tử đưa vào mảng
function cover() {
    const txtSonguyen = document.getElementById("txt_songuyen").value;
    let arr = txtSonguyen
        .split(",")
        .map(Number);
    return arr;
}

function tongSoDuong() {
    let sum = 0;
    let arr = cover();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
        Display.innerHTML = `Tổng các số dương là: ${sum}`;
    }
}
function diemSoDuong() {
    let content = "";
    let count = 0;
    let arr = cover();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
            content += arr[i] + " ";
        }
    }
    Display.innerHTML = `Số lượng các số dương là: ${count}<br>Các số dương là: ${content}`;
}
function soNhoNhat() {
    let arr = cover();
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    Display.innerHTML = `Số nhỏ nhất là: ${min}`;
}
function soDuongNhoNhat() {
    let min = null;
    let arr = cover();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (min === null || arr[i] < min) {
                min = arr[i];
            }
        }
    }
    Display.innerHTML = `Số dương nhỏ nhất là: ${min}`;
}
function soChanCuoi() {
    let lastEven = "";
    let arr = cover();
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            lastEven = arr[i];
            Display.innerHTML = `Số chẵn cuối cùng là: ${lastEven}`;
            break;
        }
        else {
            Display.innerHTML = "Không có số chẵn nào trong dãy số";
        }
    }
}
function doiVitri() {
    const txtVitri = document.getElementById("txt_vitri").value;
    let arrVitri = txtVitri.split(",").map(Number);
    let arr = cover();
    let temp = [];
    
        if (arrVitri[0] < 0 || arrVitri[0] > arr.length || arrVitri[1] < 0 || arrVitri[1] > arr.length || arrVitri.length !== 2 || txtVitri === "") {
            Display.innerHTML = "Vị trí không hợp lệ";
        }
        else {
            temp = arr[arrVitri[0] - 1];
            arr[arrVitri[0] - 1] = arr[arrVitri[1] - 1];
            arr[arrVitri[1] - 1] = temp;

            Display.innerHTML = `Dãy số sau khi đổi vị trí: ${arr}`;
        }
}
function soNguyenTo() {
    let arr = cover();
    for (let i = 0; i < arr.length; i++) {
        let cout = 0;
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j == 0) { cout++; }
        }
        if (cout == 2) {
            Display.innerHTML = `Số nguyên tố đầu tiên là: ${arr[i]}`;
            break;
        }
            else {
                Display.innerHTML = "Không có số nguyên tố nào trong dãy số";
            }
    }
}
function sapXep() {
    let arr = cover();
    //arr.sort((a, b) => a - b);
    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = i+1; j <= arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    Display.innerHTML = `Dãy số sau khi sắp xếp: ${arr}`;
}
function SoNguyen() {
    let count = 0;
    let content = "";
    let arr = cover();
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            count++;
            content += arr[i] + " ";
        }
    }
    Display.innerHTML = `Số lượng số nguyên là: ${count}<br>Các số nguyên là: ${content}`;
}
function soSanh() {
    let soAm = 0;
    let soDuong = 0;
    let arr = cover();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            soAm++;
        } else {
            soDuong++;
        }
    }
    Display.innerHTML = `Số lượng số âm: ${soAm}, Số lượng số dương: ${soDuong}`;
    if (soAm > soDuong) {
        Display.innerHTML += "<br>Số âm nhiều hơn số dương";
    } else {
        Display.innerHTML += "<br>Số dương nhiều hơn số âm";
    }
}