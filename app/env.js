var environments = {
  development: {
    stripe: {
      publishable_key: 'pk_test_z2DDmGuncmSIKzUrkhuGTuxu'
    }
  },
  production: {
    stripe: {
      publishable_key: 'pk_live_DniPSRWT0gFTvi3dchAqQCwK'
    }
  }
}

module.exports = window.location.href.match(/localhost/) ? environments.development : environments.production;
