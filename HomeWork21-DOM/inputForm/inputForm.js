document.addEventListener('input', function() {
    let box = document.getElementById('mainBox');
    let blurRadius = document.getElementById('blurRadius');
  
    box.style.boxShadow = '1px 1px ' + blurRadius.value + ' rgba(12, 233,54, 0.5)' }); 