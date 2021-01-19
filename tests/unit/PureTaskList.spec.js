import Vue from 'vue';
import PureTaskList from "../../src/components/PureTaskList";
import { WithPinnedTasks } from "../../src/components/PureTaskList.stories";

it('renders pinned tasks at the start of the list', () => {
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector('.list-item:nth(1).TASK_PINNED');

  expect(firstTaskPinned).not.toBe(null);
});