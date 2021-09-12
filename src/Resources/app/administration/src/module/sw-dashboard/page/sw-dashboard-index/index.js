import template from './sw-dashboard-index.html.twig';

Shopware.Component.override('sw-dashboard-index', {
  template,

  inject: ['jokeClient'],

  data() {
    return {
      joke: null,
    };
  },

  methods: {
    createdComponent() {
      this.fetchJoke();
      this.$super('createdComponent');
    },

    fetchJoke() {
      this.jokeClient.getJoke().then((joke) => {
        this.joke = joke;
      });
    },
  },
});
