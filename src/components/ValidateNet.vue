<template>
  <div class="grid">
    <div class="col">
      <img v-bind:src="img" height="100" class="mr-2"/>
    </div>
    <div class="col">
      <div class="text-3xl">{{ name }}</div>
      <div class="text-900">APR ~{{ apr }}</div>
      <p/>
      <div>
        <a v-bind:href="stake" target="_blank" rel="noopener noreferrer">
          <button-click class="bg-orange-500" label="Stake" rounded />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    apr: String,
    img: String,
    stake: String
  }
};
</script>