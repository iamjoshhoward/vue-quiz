const app = new Vue({
    el: '#app',
    data: {
      errors: [],

    },
    methods: {
      checkForm: function (e) {
        this.errors = [];
  
        if (!this.option) {
          this.errors.push("Name required.");
        }
  
        if (!this.errors.length) {
          return true;
        }
  
        e.preventDefault();
      },
    }
  })