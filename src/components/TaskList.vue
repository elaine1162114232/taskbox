<template>
  <PureTaskList :tasks="tasks" v-on="$listeners" @archive-task="archiveTask" @pin-task="pinTask" />
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'TaskList',
  components: {
    PureTaskList: () => import('./PureTaskList'),
  },
  methods: mapActions(['archiveTask', 'pinTask']),
  computed: mapState(['tasks']),
};
</script>