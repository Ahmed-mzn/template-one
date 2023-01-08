import { createStore } from 'vuex'

export default createStore({
  state: {
    app: {
      id: 0,
      app_id: '',
      customer_website: '',
      next_template: 0,
      domain: '',
      templates: [],
      created_at: '',
      updated_at: ''
    },
    template_one: '',
    template_one_is_set: false,
    template_two: '',
    template_two_is_set: false,
  },
  getters: {
  },
  mutations: {
    setTemplateOne(state, template_one){
      state.template_one = template_one;
      state.template_one_is_set = true;
    },
    setTemplateTwo(state, template_two){
      state.template_two = template_two;
      state.template_two_is_set = true;
    },
    setApp(state, app){
      state.app = app;
    }
  },
  actions: {
  },
  modules: {
  }
})
