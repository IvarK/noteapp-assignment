<script lang="ts" setup>
import { useNoteStore } from "@/stores/notes";

const store = useNoteStore();
</script>

<template>
  <div class="totals-container">
    <div>
      <p>Total</p>
      <h2>{{ store.total }}</h2>
    </div>

    <div>
      <p>Completed</p>
      <h2>{{ store.completed }}</h2>
    </div>

    <div>
      <p>Not Completed</p>
      <h2>{{ store.notCompleted }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.totals-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  max-width: 600px;

  background: white;
  box-shadow: 1px 1px 5px #bfbbbb;
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    font-weight: lighter;
    margin: 0;
  }
}
</style>
