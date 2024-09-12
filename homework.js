const prompt = require('prompt-sync')({sigint:true});

var n = 0; 
var id = {};
id.n = ['name','password'];

var login = function (id,n) {
  console.clear();
  console.log(`${id.n}`);
  var nickName = prompt('nickname : ');
  var passWord = prompt('password : ');
  var adress = [nickName,passWord];
  console.log(`===========================================================`);
  console.log(`${adress}`);
  login2(adress,n); 	
}

var login2 = function (a,n) { 
  var choice = prompt(`'l'ogin? 'r'egister? : `);
  switch (choice) { 
    case 'l': nLogin();
    case 'r': nRegister(a,n);
    default : login();
  }		  
}

var nRegister = function (a,n) {
  while (id[n] != null) {
  n++;
  }	  
  id.n = a;
  n = 0;
  login();
}

var item = function () {
  console.clear();
  var itemName = prompt('item name : ');
  var itemWord = prompt('item explain : ');
  console.log(`===========================================================`);
  console.log(`${itemName} \n=${itemWord}`);
}

var character = function () {
  console.clear();
  var charaName = prompt('character name : ');
  var charaHp = prompt('character hp : ');
  var charaAtk = prompt('character atk: '); 
  console.log(`===========================================================`);
  console.log(`name:${charaName} \nhp:${charaHp} \natk:${charaAtk}`);
}
 

var start = function () {
  console.clear();
  console.log(`1, 로그인 \n2, 아이템 생성하기\n3, 캐릭터 생성하기\n`);
  var choice = prompt('무슨 api를 참고하겠습니까? :');
  switch (choice) { 
    case '1': login(); break;
    case '2': item(); break;
    case '3': character(); break;
    default: start();
  }
}



start();
