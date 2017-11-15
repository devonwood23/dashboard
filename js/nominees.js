// SELECTED NOMINEES

'use strict';

Vue.component('nominees', {
  template: `
              <div class="nominees">
                <h1>Selected nominees!</h1>
                <div class="standings">
                  <a href="#"><div class="ballondor"><h3>Hazard.</h3><img id="myDIV" src="img/dp1.PNG"></div></a>
                
                  <a href="#"><div class="mvp"><h3>De Bruyne.</h3><img id="myDIV" src="img/dp2.PNG"></div></a>

                  <a href="#"><div class="underrated"><h3>Ronaldo.</h3><img id="myDIV" src="img/dp3.PNG"></div></a>

                  <a href="#"><div class="ballondor"><h3>Neymar.</h3><img id="myDIV" src="img/dp4.PNG"></div></a>
                
                  <a href="#"><div class="mvp"><h3>Messi.</h3><img id="myDIV" src="img/dp5.PNG"></div></a>

                  <a href="#"><div class="underrated"><h3>Mbappe.</h3><img id="myDIV" src="img/dp6.PNG"></div></a>
                </div>
              </div>
            `
});
  
  var login = new Vue({
  el: '#nominees'
})