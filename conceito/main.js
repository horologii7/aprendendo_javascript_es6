// 1a questao
class User {
  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  isAdmin() {
    return this.admin || false;
  }
}

class Admin extends User {
  constructor(email, password){
    super(email, password);
    this.admin = true;
  }
}

const user1 = new User('teste@email.com', '123456');
const adm1 = new Admin('testeAdm@email.com', '123456');

console.log(user1.isAdmin());
console.log(adm1.isAdmin());

// 2a questao
const usuarios2 = [
  { nome: 'Ruan', idade: 27, empresa: 'Horologii' },
  { nome: 'Lucas', idade: 25, empresa: 'Horologii' },
  { nome: 'Rafael', idade: 32, empresa: 'CasaVillar' },
];
// 2.1
const mapIdade = usuarios2.map(({ idade }) => idade);
console.log(mapIdade);
// 2.2
const filterHorologii = usuarios2.filter(({ empresa }) => empresa === 'Horologii');
console.log(filterHorologii);
// 2.3
const findGoogle = usuarios2.find(({empresa}) => empresa === 'Google');
console.log(findGoogle);
// 2.4
const multIdadeUsers = usuarios2.map(item => {
    item.idade = item.idade * 2;
    return item;
  }).filter(({idade}) => idade <= 50);

console.log(multIdadeUsers);

// 3a questao
// 3.1
const arr3 = [1, 2, 3, 4, 5];
arr3.map(item => item + 10);
// 3.2
const usuario3 = { nome: 'Diego', idade: 23 };
const mostraIdade3 = ({idade}) => idade;
console.log(mostraIdade3(usuario3));
// 3.3
const nome3 = "Diego";
const idade3 = 23;
const mostraUsuario3 = (nome3 = 'Diego', idade3 = 18) => ({ nome3, idade3 });
console.log(mostraUsuario3(nome3, idade3));
console.log(mostraUsuario3(nome3));
// 3.4
const promise3 = () => new Promise((resolve, reject) => resolve());

promise3()
  .then(() => console.log("Entrou"))
  .catch(() => console.log("Não entrou"));

// 4a questao
// 4.1
const empresa4 = {
  nome4: 'Horologii',
  endereco4: {
    cidade4: 'Fortaleza',
    estado4: 'CE',
  }
};

const { nome4, endereco4: { cidade4, estado4 }} = empresa4;
console.log(nome4);
console.log(cidade4); 
console.log(estado4);  
// 4.2
const mostraInfo4 = (usuario4) => {
  let { nome4, idade4 } = usuario4;
  return `${nome4} tem ${idade4} anos.`;
}
 
console.log(mostraInfo4({ nome4: 'Ruan', idade4: 27 }));

// 5a questao
// 5.1
const arr5 = [1, 2, 3, 4, 5, 6];
const [ x5, ...y5] = arr5;
console.log(x5);
console.log(y5);
const soma5 = (...params) => params.reduce((total, next) => total + next);
console.log(soma5(1,2,10));
// 5.2
const usuario5 = {
  nome5: 'Ruan',
  idade5: 27,
  endereco5: {
    cidade5: 'Fortaleza',
    uf5: 'CE',
    pais5: 'Brasil',
  }
};
const usuario52 = { ...usuario5, nome5: 'Lucas' };
const usuario53 = { ...usuario5, endereco5: {...usuario5.endereco5, cidade5: 'Caucaia'}};
console.log(usuario52);
console.log(usuario53);

// 6a questao
const usuario6 = 'Ruan';
const idade6 = 27;
console.log(`O usuário ${usuario6} possui ${idade6} anos`);

// 7a questao
const nome7 = 'Ruan';
const idade7 = 27;
const usuario7 = {
 nome7,
 idade7,
 cidade7: 'Fortaleza',
};
console.log(usuario7);