// HEADER

'use strict';

var docURL = document.URL;
    var linksList = document.querySelectorAll('a[href]');
    for (var i = 0; i< linksList.length; i++) {
        var link = linksList[i];
        if (link.href === docURL) {
            link.className += 'current-link';
        }
    }

var menu = {
    menus: [
    {
      title: 'Dashboard',
      link: 'dashboard.html',
      isActive: true
    },
    {
      title: 'Categories',
      link: 'results.html',
      isActive: false

    },
    {
      title: 'Nominees',
      link: 'nominees.html',
      isActive: false

    },
    {
      title: 'Results',
      link: 'categories.html',
      isActive: false
    }
    ]
}
Vue.component('main-menu', {
  template: `
              <ul class="tabs" v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">{{ menu.title }}</a>
                </li>
              </ul>
            `,
  data: function() {
    return menu;
  }
});

var menus = new Vue({
  el: '#mainmenu'
})





