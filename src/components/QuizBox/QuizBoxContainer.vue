<template>
  <div class="container">
    <h2>Quiz 1 - HTML / CSS / JS Practice</h2>

    <form
      id="app"
      @submit="checkForm"
      action="/"
      method="post"
      novalidate="true"
    >
      <ul>
        <li v-for="question in questions" :key="question.id">
          <div class="questionBox">
            <p>{{ question.id }}. {{ question.question }}</p>
            <!-- QUESTION TEXT-->

            <li
              class="AnswerChoice"
              v-for="option in question.options"
              v-bind:key="option.id"
            >
              <p>
                <input
                  for="option"
                  class="radio"
                  v-bind:key="option.id"
                  :value="option.id"
                  :name="option"
                  type="radio"
                />
                <!-- CREATE INPUT FOREACH OPTION IN QUESTION OPTIONS-->

                <label class="label" v-bind:key="option.id">{{
                  " " + option
                }}</label>
              </p>
              <!-- CREATE LABEL FOR EACH OPTION IN QUESTION OPTIONS-->
            </li>
          </div>
        </li>
      </ul>
      <input type="submit" value="Submit" />
      <p v-if="errors">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>
    </form>
  </div>
</template>


<script>
import questionsData from "../../assets/questions.json";

export default {
  data() {
    return {
      questions: questionsData,
      el: "#app",
      data: {
        errors: [],
      },
      methods: {
        checkForm: function (e) {
          this.errors = [];

          if (!this.option) {
            this.errors.push("Name required.");
          }

          if (!this.errors) {
            return true;
          }

          e.preventDefault();
        },
      },
    };
  },
};
</script>


<style scoped>
.container {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: table;
}

h2 {
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
}

input[type="submit"] {
  background-color: green;
  color: white;
  padding: 10px;
  margin-top: 20px;
  margin-left: 0 auto;
  margin-right: 0 auto;
  cursor: pointer;
  border-radius: 5px;
}

input[type="submit"]:hover {
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: black;
}

p {
  color: black;
}

.questionBox {
  background: white;
  padding: 25px 20px 40px;
  margin-top: 10px;
  box-shadow: 3px 3px 3px gray;
  border-radius: 10px;
}

.AnswerChoice {
  margin-left: 20px;
}
</style>
