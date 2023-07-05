<template>
  <section class="section">
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column">
        <article class="message is-medium is-dark" v-for="question in questions" :key="question.id">
          <div class="message-header" v-on:click="toggleQuestion(question)">
            <p>{{ $t(question.title) }}</p>
            <faIcon icon="chevron-down"></faIcon>
          </div>
          <transition>
            <template v-if="question.visible">
              <div class="message-body" v-show="question.visible">
                {{ $t(question.answer) }}
              </div>
            </template>
          </transition>
        </article>
      </div>
      <div class="column is-1"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuestionsSection',
  data() {
    return {
      questions: this.$store.getters.getQuestions,
    }
  },
  methods: {
    toggleQuestion: function (question) {
      question.visible = !question.visible
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>