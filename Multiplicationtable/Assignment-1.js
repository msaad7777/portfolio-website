function drawTable() {
    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;
    var table = "<table>";
    for (var i = 1; i <= rows; i++) {
      table += "<tr>";
      for (var j = 1; j <= columns; j++) {
        table += "<td>" + (i * j) + "</td>";
      }
      table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table-container").innerHTML = table;
  }
  
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link')
  
  navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
  });
  
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          document.body.classList.remove('nav-open');
      })
  })
  