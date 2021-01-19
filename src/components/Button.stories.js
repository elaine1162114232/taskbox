import Button from "./Button";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  excludeStories: /.*Data$/,
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  methods: Button.actionsData,
  template: '<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});