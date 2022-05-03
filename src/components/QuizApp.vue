<script setup>
import QuizBoxContainer from './QuizBox/QuizBoxContainer.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="body">
        <div class="topbar">
            <h3 class="title">Quiz Application</h3>
        </div>

        
        <QuizBoxContainer />
  </div>
</template>

<script>
import questionsData from "../assets/questions.json";

export default {
  data() {
    return {
      questions: questionsData,
    };
  },
};
</script>

<style scoped>
.body {
    background-color: lightgray;
    width: 100%;
}
.topbar{
    height: 40px;
    width: 100%;
    background-color: #7a0804;
    padding-left: 20px;;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}


h3 {
  font-size: 1.2rem;
  color: white;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
