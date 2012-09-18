/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  // if firefox 3.5+, hide content till load (or 3 seconds) to prevent FOUT
  var d = document, e = d.documentElement, s = d.createElement('style');
  if (e.style.MozTransform === ''){ // gecko 1.9.1 inference
    s.textContent = '#slidesHome img{visibility:hidden}';
    var r = document.getElementsByTagName('script')[0];
    r.parentNode.insertBefore(s, r);
    function f(){ s.parentNode && s.parentNode.removeChild(s); }
    addEventListener('load',f,false);
    setTimeout(f,2000); 
  }
})();


var $j = jQuery.noConflict();

$j(document).ready(function(){
 $j('#slidesHome').cycle({
fx: 'scrollHorz',
timeout: 6000,
delay: -2000 ,
speed: 500,
prev: '#prev',
next: '#next',
pager: '#navPager',
pagerAnchorBuilder: pagerFactory
});
function pagerFactory(idx, slide) {
var s = idx > 2 ? ' style="display:none"' : '';
return '<li'+s+'><a href="#">'+(idx+1)+'</a></li>';
}
   
    
    
});



