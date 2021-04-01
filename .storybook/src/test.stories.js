import Test from './test.vue'

export default {
  title: 'block/test',
  component: Test,
};

export const Default = () => ({
  components: { Test },
  template: `<Test />`,
});
