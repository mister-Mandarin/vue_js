import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
  currentUser: null,
  validationError: null,
  isLoggedIn: null,
};

const mutations = {
  registerStart: function (state) {
    state.isSubmitting = true;
    state.validationError = null;
  },
  registerSuccess: function (state, dataUser) {
    state.isSubmitting = false;
    state.currentUser = dataUser;
    state.isLoggedIn = true;
  },
  registerFail: function (state, dataErrors) {
    state.isSubmitting = false;
    state.validationError = dataErrors;
  },
};

const actions = {
  register: function (context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart');
      authApi
        .register(credentials)
        .then((response) => {
          /* Разбираем почему response.data.user. Response это весь запрос со статусом 200,
            который можно посмотреть в консоли. data.user это путь до данных пользователя в запросе*/
          context.commit('registerSuccess', response.data.user);
          resolve(response.data.user);
        })
        .catch((result) => {
          context.commit('registerFail', result.response.data.errors);
        });
    });

    // setTimeout(() => {
    //   context.commit('registerStart');
    // }, 1000);
  },
};

export default {
  actions,
  state,
  mutations,
};
