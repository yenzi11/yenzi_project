let rekening = {
    nama: "Ahmad",
    sandi: 12345,
    pin: 54321,
    saldo: 1000000
}

// ambil saldo 
let inputSandi = prompt("Masukan sandi anda")
let inputPin = 0 

function ambilSaldo(){
    let ambil = parseInt(prompt("Berapa saldo yang akan anda ambil?"))
    let sisa = rekening.saldo - ambil 
    alert(`saldo anda sisa: $${sisa}`)
}   

// input sandi  
if(inputSandi == 12345){
    inputSandi = prompt("Masukan pin")
}else{
    alert("sandi salah ")
}

// input pin 
if(inputPin == 54321){
    ambilSaldo()
}else{
    alert("pin salah")
}

ambilSaldo()