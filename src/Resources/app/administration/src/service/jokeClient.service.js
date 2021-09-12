const ApiService = Shopware.Classes.ApiService;

class JokeClient extends ApiService {
  getJoke() {
    return this.httpClient.get(
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit',
    ).then((response) => {
      return ApiService.handleResponse(response);
    });
  }
}

Shopware.Application.addServiceProvider('jokeClient', (container) => {
  const initContainer = Shopware.Application.getContainer('init');
  return new JokeClient(initContainer.httpClient, container.loginService);
});
