// Small enhancements for the portfolio page
document.addEventListener('DOMContentLoaded',function(){
  // inject current year into footer
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  // smooth scroll for internal anchors (modern browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
