import AddForm from '../components/AddForm.vue';

export default {
  title: 'Platespotting/Add form',
  component: AddForm,
};

const Template = () => ({
  components: { AddForm },
  template: '<add-form :plate="3"></add-form>',
});

export const Default = Template.bind({});