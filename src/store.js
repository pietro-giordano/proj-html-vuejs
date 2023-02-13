import { reactive } from 'vue';

export const store = reactive({
      navLinks: [
            {
                  name: 'home',
                  url: '#',
                  selected: true,
                  new: false
            }, {
                  name: 'about',
                  url: '#',
                  selected: false,
                  new: false
            }, {
                  name: 'prices',
                  url: '#',
                  selected: false,
                  new: false
            }, {
                  name: 'courses',
                  url: '#',
                  selected: false,
                  new: true
            }, {
                  name: 'location',
                  url: '#',
                  selected: false,
                  new: false
            }, {
                  name: 'blog',
                  url: '#',
                  selected: false,
                  new: false
            },
      ],

});