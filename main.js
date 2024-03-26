// Mendapatkan semua checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let txt = document.querySelector("#total");

// Variabel untuk menyimpan nilai
let total = JSON.parse(localStorage.getItem("data")) || 0;

// Menambahkan event listener pada setiap checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // Jika checkbox dicentang, tambahkan nilainya ke total
    if (checkbox.checked) {
      total ++;
      localStorage.setItem(checkbox.name,JSON.stringify(checkbox.name))
    } else {
      // Jika checkbox tidak dicentang, kurangi nilainya dari total
      total --;
      localStorage.removeItem(checkbox.name);
    }

    // Update nilai total di elemen HTML
    txt.textContent = total + " / " + checkboxes.length;
    localStorage.setItem("data",JSON.stringify(total))
  });
});

txt.textContent = total + " / " + checkboxes.length;

// Memuat data checkbox dari local storage
window.addEventListener('load', () => {
  checkboxes.forEach(checkbox => {
    const value = localStorage.getItem(checkbox.name);
    if (value) {
      checkbox.checked = true;
    }
  });
});