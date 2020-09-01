const baguetteBox = "baguettebox.js";

baguetteBox.run(".gallery");

const search = new Filter("search", "data-caption");

// function myFunction() {
//   var input, filter, a, alt, i, gallery, txtValue;
//   input = document.getElementById("search");
//   filter = input.nodeValue.toUpperCase();
//   gallery = document.getElementsByClassName("gallery");
//   a = a.getElemntsByTagName("a");

//   for (i = 0; i < a.length; i++) {
//     alt = a[i].getElemntsByTagName("alt")[0];
//     txtValue = alt.textContent || alt.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
