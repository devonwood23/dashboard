Vue.component('ratings', {
  template: `
              <div class="ratings">
                <h1>Check current standings!</h1>
                <div class="standings">
                  <a href="#"><div class="ballondor"><h3>Player of the year.</h3><img id="myDIV" src="img/download.png"></div></a>
                
                  <a href="#"><div class="mvp"><h3>Most valuable player.</h3><img id="myDIV" src="img/mvp (2).PNG"></div></a>

                  <a href="#"><div class="underrated"><h3>Golden Boot.</h3><img id="myDIV" src="img/golden-boot-.PNG"></div></a>
                </div>
              </div>
            `,
  data: function() {
    return ratings;
  }
});
  
  var login = new Vue({
  el: '#ratings'
});