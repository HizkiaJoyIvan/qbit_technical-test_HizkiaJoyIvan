const fruits = [
    {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
    },
    {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
    },
    {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
    },
    {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
    },
    {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
    }
]

function removeDuplicates(arr) {
    let unique= []
    arr.forEach(element => {
        if (!unique.includes(element.toLowerCase())) {
            unique.push(element.toLowerCase())
        }
    })
    return unique
}

let fruitList= fruits.map((f) => f.fruitName)
//1
console.log("No 1")
console.log(`Daftar nama buah: ${removeDuplicates(fruitList)}`)
//Jawaban
// Daftar nama buah: apel,kurma,manggis,jeruk bali,salak

//2
let localBag = fruits.filter((f) => f.fruitType === 'LOCAL').map((f) => f.fruitName)
let importBag = fruits.filter((f) => f.fruitType === 'IMPORT').map((f) => f.fruitName)
console.log("No 2")
console.log("Jumlah wadah yang dibutuhkan: 2")
console.log(`Daftar buah yang ada pada kantong lokal: ${removeDuplicates(localBag)}`)
console.log(`Daftar buah yang ada pada kantong import: ${removeDuplicates(importBag)}`)
//Jawaban
//Daftar buah yang ada pada kantong lokal: manggis,jeruk bali,salak
//Daftar buah yang ada pada kantong import: apel,kurma

//3
let totalLocal = removeDuplicates(localBag).length
let totalImport = removeDuplicates(importBag).length
console.log("No 3")
console.log(`Total buah pada kantong lokal: ${totalLocal}`)
console.log(`Total buah pada kantong import: ${totalImport}`)
//Jawaban
//Total buah pada kantong lokal: 3
//Total buah pada kantong import: 2


//4
// Soal tersebut pada dasarnya adalah manipulasi array, di mana pada subsoal yang pertama
// dilakukan mapping dengan melakukan filtering jika ada objek yang memiliki attribute yang sama dalam hal ini adalah fruitName
// Untuk soal kedua, dilakukan filtering array sehingga bisa terlihat mana objek yang memiliki karakteristik yang sama
// dalam hal ini adalah jenis kantong (atribut fruitType) yang terdiri dari LOCAL atau IMPORT
// Untuk soal ketiga, dihitung jumlah buah yang ada pada kantong dengan menggunakan Array.length fungsi dari Javascript