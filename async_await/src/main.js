import axios from 'axios';

const delay = (second) => new Promise(resolve => setTimeout(() => {resolve(`${second}s`)}, 2000));
// Transformar essa função em async/await
//function umPorSegundo() {
//  delay().then(() => {
//    console.log('1s');
//    delay().then(() => {
//      console.log('2s');
//      delay().then(() => {
//        console.log('3s');
//      });
//    })
//  });
//}
//umPorSegundo();
const umPorSegundo = async () => {
  for(let i=1;i<=3;i++){  
    console.log(await delay(i));
  }
}
umPorSegundo();

// Transformar essa função em async/await
//function getUserFromGithub(user) {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Usuário não existe');
//  })
// }
const getUserFromGithub = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch(err) {
    console.warn("Erro na api do Github");
  }
}

getUserFromGithub("horologii7");
getUserFromGithub("horologii777777");

// Transformar a função static da class em async/await
//class Github {
//  static getRepositories(repo) {
//    axios.get(`https://api.github.com/repos/${repo}`)
//      .then(response => {
//        console.log(response.data);
//      })
//      .catch(err => {
//        console.log('Repositório não existe');}
//      )
//  }
//}
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch(err) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('horologii7/zaiko-web');
Github.getRepositories('horologii7/zaiko-api');
Github.getRepositories('horologii7/zaiko-webbbb');
// Transforme a função em async/await
//const buscaUsuario = usuario => {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Usuário não existe');
//  });
// }
const buscaUsuario = async usuario => {
  try {
    const response = axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch(err) {
    console.log('Usuário não existe');
  }
}

buscaUsuario('horologii7');