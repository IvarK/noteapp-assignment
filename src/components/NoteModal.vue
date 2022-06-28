<script lang="ts" setup>
import { useNoteStore } from "@/stores/notes";
import { reactive } from "vue";
import CommonButton from "./common/CommonButton.vue";

const store = useNoteStore();

const state = reactive({
  title: "",
  content: "",
});

const addNote = async (event: Event) => {
  event.preventDefault();
  await store.addNote({ ...state, id: store.lastID + 1, status: "New" });
  store.closeNoteModal();

  // Reset the state, otherwise when you open it again, it has the previous input.
  state.title = "";
  state.content = "";
};

const cancel = (event: MouseEvent) => {
  event.preventDefault();
  store.closeNoteModal();
};
</script>

<template>
  <Modal v-model="store.modalOpen" :close="store.closeNoteModal">
    <div class="modal">
      <h2>Add note</h2>
      <form @submit="addNote">
        <input
          type="text"
          placeholder="Add title"
          v-model="state.title"
          required
        />
        <textarea placeholder="Add content" v-model="state.content" required />
        <div class="buttons-container">
          <CommonButton>Save</CommonButton>
          <CommonButton appearance="secondary" @click="cancel">
            Cancel
          </CommonButton>
        </div>
      </form>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.modal {
  background: white;
  padding: 20px;
  box-shadow: 0 0 5px black;
  width: 400px;
}

h2 {
  margin-bottom: 20px;
  font-weight: lighter;
}

form {
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid rgb(206, 206, 206);
    border-radius: 6px;
  }
}

.buttons-container {
  display: flex;
}
</style>
