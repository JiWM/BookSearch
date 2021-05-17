<template>
  <transition name="buymodal" appear>
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <button class="modal-default-button" @click="$emit('close')">
            X
          </button>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style>

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 10px 15px 5px 15px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  padding: 0 20px;
}

.modal-default-button {
  color:black;
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
  