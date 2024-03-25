  function sortTable(n) {
//    console.log(n);
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector('table');
    switching = true;
//    for (var f = 0, row; row = table.rows[f]; f++) {
//        console.log(row)
//    }
    dir = 'asc'; // Начинаем с сортировки по возрастанию

//    while (switching) {
//        switching = false;
//        rows = table.rows;
//        console.log('rows', rows)
//        for (i = 1; i < rows.length; i++) {
//            shouldSwitch = false;
//            console.log('row '+String(i),rows[i]);
//            x = rows[i].getElementsByTagName('td')[n-1];
//            y = rows[i].getElementsByTagName('td')[n-1];
//            console.log('x '+String(x),'y'+String(y));
//            if (dir === 'asc') {
//              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                shouldSwitch = true;
//                break;
//              }
//            } else if (dir === 'desc') {
//              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                shouldSwitch = true;
//                break;
//              }
//            }
//          }
//          if (shouldSwitch) {
//            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//            switching = true;
//            switchcount++;
//          } else {
//            if (switchcount === 0 && dir === 'asc') {
//              dir = 'desc';
//              switching = true;
//            }
//          }
//        }
//    }

    while (switching) {
      switching = false;
      rows = table.rows;
//      console.log('rows', rows)
      for (i = 1; i < rows.length-1; i++) {
//      console.log('row',table.rows[i]);
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[n-1];
//        console.log('x',x);
        y = rows[i+1].getElementsByTagName('td')[n-1];
        if (n != 1 && n!=3){
            if (dir === 'asc') {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
                }
            }
            else if (dir === 'desc') {
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
                }
            }
        }
        else{
            if (dir === 'asc') {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            } else if (dir === 'desc') {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
      if (dir == 'asc'){
        clear_sort();
//      console.log('asc');
        word = String(document.getElementsByClassName('thead_main')[n-1].textContent);
//      console.log(word);
        console.log(document.getElementsByClassName('thead_main')[n-1]);
        document.getElementsByClassName('thead_main')[n-1].innerHTML = word+' asc'
        }
        else if (dir == 'desc'){
            clear_sort();
            word = String(document.getElementsByClassName('thead_main')[n-1].textContent);
            console.log(document.getElementsByClassName('thead_main')[n-1]);
            document.getElementsByClassName('thead_main')[n-1].innerHTML = word+' desc'
        }
  }

function clear_sort(){
    finder = document.getElementsByClassName('thead_main');
      for (var k=1; k < finder.length+1; k++){
          chooen = document.getElementsByClassName('thead_main')[k-1].textContent;
          chooen = chooen.replace(' asc','');
          chooen = chooen.replace(' desc','');
          console.log(document.getElementsByClassName('thead_main')[k-1].textContent);
          document.getElementsByClassName('thead_main')[k-1].innerHTML = chooen;
      }
}

	window.onload = function() {
		setTimeout(function() {
			document.getElementById("preloader_malc").style.display = "none";
		}, 400);
	};