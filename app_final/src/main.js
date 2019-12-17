import api from './api';

class App {
  constructor(){
    this.repositories = [];

    this.inputElement = document.querySelector('input[name=repository]');
    this.formElement = document.getElementById('repo-form');
    this.listElement = document.getElementById('repo-list');
    
    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingElement = document.createElement('span');
      loadingElement.appendChild(document.createTextNode('Carregando...'));
      loadingElement.setAttribute('id', 'loading');

      this.formElement.appendChild(loadingElement);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;

    if (repoInput.length === 0)
      return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const { name, description, html_url, owner: {avatar_url} } = response.data;
  
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });
  
      this.inputElement.value = '';
  
      this.render();
    } catch (err) {
      alert('Repositório não existe!');
    }

    this.setLoading(false);  
  }

  render() {
    this.listElement.innerHTML = '';

    this.repositories.forEach(repo => {
      let img = document.createElement('img');
      img.setAttribute('src', repo.avatar_url);

      let title = document.createElement('strong');
      title.appendChild(document.createTextNode(repo.name));

      let description = document.createElement('p');
      description.appendChild(document.createTextNode(repo.description));

      let link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', repo.html_url);
      link.appendChild(document.createTextNode('Acessar'));

      let listItem = document.createElement('li');
      listItem.appendChild(img);
      listItem.appendChild(title);
      listItem.appendChild(description);
      listItem.appendChild(link);

      this.listElement.appendChild(listItem);
    });
  }
}

new App();