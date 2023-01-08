<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
      logo: "ah",
    }
  },
  mounted(){
    axios.get("/apps/"+process.env.VUE_APP_APP_ID)
    .then(response => {
      console.log(response);
      let nextTemplate = response.data.next_template,
          templates = response.data.templates;

      console.log(nextTemplate);
      console.log(templates);

      let t = templates.find(t => t.id == nextTemplate);

      console.log(t.template_code);
      
      this.$store.commit('setApp', response.data)

      if(t.template_code == "template_one"){
        this.$store.commit('setTemplateOne', t)
        this.$router.push({name: 'one'});
      } else {
        this.$store.commit('setTemplateTwo', t)
        this.$router.push({name: 'two'});
      }
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    })
  }
}
</script>
