var dataKendaraan = ["Ujang",24,"Avanza","B 1234 AGG",600000,false]

var dataSTNKUjang = {
    "nama" : "Ujang",
    "usia" : 24,
    "tipe" : "Avanza",
    "plat" : "B 1234 AGG",
    "biaya" : 600000,
    "isBayar" : false,
}

//console.log(dataSTNK)
console.log("object")
console.log(JSON.stringify(dataSTNKUjang.isBayar))

var dataSTNK = [
    {"nama" : "Ujang",
    "usia" : 24,
    "tipe" : "Avanza",
    "plat" : "B 1234 AGG",
    "biaya" : 600000,
    "isBayar" : false,
},

{
    "nama" : "Indah",
    "usia" : 31,
    "tipe" : "Avanza",
    "plat" : "B 1234 AGG",
    "biaya" : 600000,
    "isBayar" : false,
},

{
    "nama" : "Dewi",
    "usia" : 27,
    "tipe" : "Avanza",
    "plat" : "B 1234 AGG",
    "biaya" : 600000,
    "isBayar" : false,
}
]

console.log(JSON.stringify(dataSTNK[2].biaya))