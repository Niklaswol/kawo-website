<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang.code">
        {{ lang.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      languages: [
        { code: "de", text: "Deutsch" },
        { code: "en", text: "Englisch" },
      ],
    };
  },
};
</script>