/*Text in JS*/

/*let matn ="Assalomu aleykum,dostlar!";*/
/*console.log(matn.length);*/

/*let matn ="sen gapir sen men esa sen bilan yozib boraman!";*/
/*let birinchiSenIndeksi = matn.indexOf("sen");*/
/*console.log(matn.lastIndexOf("sen",birinchiSenIndeksi+1));*/

/*let matn = "Salom hammaga! salom berdim hammaga.salom salom";*/

/*console.log(matn.replace(/salom|hammaga|berdim/gi,'alik'));*/


/*let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz){
  if (soz == 'Salom' || soz == 'salom'){
      return 'alik';
  }else if (soz == 'hammaga'){
      return 'barchaga';
  }
});*/

/*console.log(yangiMatn);*/

/*Malumotlar kiritish: pop,push*/

let list = [];

/*list.push('Navruz');*/
/*list.push('17');*/
/*list.push('Islom');
list.push('16');
list.push('Qudrat');
list.push('16');*/
/*console.log(list.length);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);*/


/*list.unshift('Navruz');
list.unshift('17');
list.unshift('Islom');
list.unshift('16');
list.unshift('Qudrat');
list.unshift('18');
console.log(list.length);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);*/

/*let belgilar = "0123456789";

function  parolBer(){
    let i =0;
    let parol = '';
    while (i < 6){
    let son = parseInt(Math.random() * belgilar.length);
    parol +=belgilar[son];
    i++;
    }
    console.log(parol);
}*/

document.querySelector(".tugma").addEventListener('click',function (){
    let ekran = document.querySelector(".ekran");
    console.log(typeof  parseInt(ekran.value))
    ekran.value = parseInt(ekran.value) +1
})

document.querySelector(".nolga").addEventListener('click',function (){
    document.querySelector('.ekran').value = 0
})
document.querySelector(".open ").addEventListener('click',function (){
    document.querySelector('.ekran').value = 2
})


