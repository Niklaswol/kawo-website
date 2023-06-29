<template>
  <div class="control has-icons-left">
    <div class="select is-primary">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang.code">
          {{ lang.text }}
        </option>
      </select>
    </div>
    <span class="icon is-small is-left">
      <faIcon icon="globe"></faIcon>
    </span>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      languages: [
        {code: "de", text: "DE"},
        {code: "en", text: "EN"},
      ],
    };
  },
};
</script>