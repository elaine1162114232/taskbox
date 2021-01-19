<template>
  <PureInboxScreen :error="error"></PureInboxScreen>
</template>
<script>
import PureInboxScreen from "../../src/components/PureInboxScreen";
import { mapState } from 'vuex';

export default {
  name: 'InboxScreen',
  components: { PureInboxScreen },
  computed: mapState(['error']),
}
</script>