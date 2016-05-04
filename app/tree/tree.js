(() => {
  Vue.component('my-tree', {
    props: ['nodes'],
    template: '#treeTpl'
  });

  function genNodes() {
    const nodes = [];
    for (let i = 0; i < 10; i++) {
      const item = {
        id: `node${i}`,
        name: `node-name-${i}`,
        _collapse: true,
        childrens: []
      };
      item.childrens.push({
        id: `node-${i}-i`,
        name: `node-name-${i}-${i}`
      });
      nodes.push(item);
    }
    return nodes;
  }

  const vm = new Vue({
    el: '#tree',
    data: {
      nodes: genNodes()
    }
  });


})();
