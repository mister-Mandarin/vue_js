<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>Вход</h1>
          <p class='text-xs-center'>
            <!--router-link - ссылка. Вместо того чтобы писать <a href=""></a> -->
            <router-link :to="{name: 'login'}"> Need an account?</router-link>
          </p>
          VALIDATION ERRORS
          <form @submit.prevent='onSubmit'>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Username'
                v-model='username'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Email'
                v-model='email'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='password'
                placeholder='Password'
                v-model='password'
              />
            </fieldset>
            <button
              class='btn btn-lg btn-primary pull-xs-right'
              :disabled='isSubmitting'
            >
              Вход
            </button>
            {{ isSubmitting }}
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
  data: function() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  // Метод computed позволяет создавать вычисляемые переменные
  computed: {
    // строчка return this.$store.state.count присваивает значение из state.count
    // внутрь локальной переменной count()
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    }
  },
  methods: {
    onSubmit() {
      console.log('subbmittedform');
      // this.$store.commit('registerState'); - если обращаемся к мутации то commit
      // this.$store.dispatch('register'); - если обращаемся к экшену, то dispatch
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
        //then - это в случае успешного ответа register.
        .then(user => {
          console.log('Success register user!', user);
          this.$router.push({name: 'home'})
        });
    }
    // это мутация. Она прописывается в store/index.js
    // когда нужно сделать мутацию пишем this.$store.commit и название мутации в ()
  }
};
</script>
