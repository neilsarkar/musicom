var environments = {
  development: {
    stripe: {
      publishable_key: 'pk_AOgDoSwZNnA6FsWn8kaASkUof29qk'
    }
  },
  production: {
    stripe: {
      publishable_key: 'pk_Ud9pbfNE5rUTGl9uAq9rXDiShUuRO'
    }
  }
}

module.exports = window.location.href.match(/localhost/) ? environments.development : environments.production;
