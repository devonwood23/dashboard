// diff categories

'use strict';

Vue.component('categories', {
  template: `
              <div class="different-categories">
               <h1>Final Results!</h1>
                <div class="vid">
                <video width="620" height="510" autoplay loop>
                  <source src="img/source.mp4" type="video/mp4">
                </video>
                </div>
              </div>
            `
});
  
  var login = new Vue({
  el: '#different-categories'
})