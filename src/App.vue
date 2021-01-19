<template>
  <div id="app">
    <task v-if="false"></task>
    <task-list v-if="false"></task-list>
    <InboxScreen></InboxScreen>
  </div>
</template>

<script>
import store from './store';
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import InboxScreen from "./components/InboxScreen";

export default {
  name: "App",
  store,
  components: {
    InboxScreen,
    Task,
    TaskList,
  }
};
</script>

<style>
@import url(./index.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
