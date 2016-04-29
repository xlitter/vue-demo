/* global Vue */
(() => {
  'use strict';

  const vue = new Vue({
    el: '#app',
    data: {
      name: '',
      editItem: null,
      list: []
    },
    methods: {
      showEdit(item) {
        // Vue.set(item, 'isEdit', true);
        item.isEdit = true;
        this.editItem = item;
      },
      cancelEdit(item) {
        // Vue.set(item, 'isEdit', false);
        item.isEdit = false;
        this.editItem = null;
      },
      submit() {
        this.list.push({
          name: this.name,
          isEdit: false,
          checked: false
        });
        this.name = '';
      },
      del(item) {
        const list = this.list;
        list.$remove(item);
      },
      removeSelectedItems(flag) {
        const selected = !!flag;
        const list = this.list;
        const newList = [];

        list.forEach(v => {
          if (v.checked !== selected) {
            newList.push(v);
          }
        });

        this.list = newList;
      },
      clear() {
        this.list = [];
      },
      toggleSelected() {
        const list = this.list;
        const selected = this.toggleSelected.selected = !Boolean(this.toggleSelected.selected);
        list.forEach(v => {
          // Vue.set(v, 'checked', true);
          v.checked = selected;
        });
      }
    },
    directives: {
      todoFocus(val) {
        if (!val) {
          return;
        }

        const el = this.el;
        Vue.nextTick(() => {
          el.focus();
        });
      }
    }
  });
})();
