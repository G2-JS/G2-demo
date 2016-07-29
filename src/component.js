const component = {};
const componentName = 'pigcan';

component[`${componentName}A`] = () => {
  console.log('A');
};

component[`${componentName}B`] = () => {
  console.log('B');
};

export default component;
