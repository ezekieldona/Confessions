// Page 2
document.getElementById('nextButton1').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
});

// Page 3
document.getElementById('nextButton2').addEventListener('click', function() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
});
