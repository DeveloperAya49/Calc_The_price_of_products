// CPFP.js

function update() {
  // نحول القيم لأرقام
  let Price = parseFloat(document.getElementById('price').value) || 0;
  let Taxes = parseFloat(document.getElementById('taxes').value) || 0;
  let Ads = parseFloat(document.getElementById('ads').value) || 0;
  let Discount = parseFloat(document.getElementById('discount').value) || 0;

  let final = Price + Taxes + Ads - Discount;

  // نحدث الزر والنصوص
  document.getElementById('btnT').innerText = 'Total: ' + final.toFixed(2);
  document.getElementById('lprice').innerText = 'Price is: ' + Price;
  document.getElementById('ltaxes').innerText = 'Taxes are: ' + Taxes;
  document.getElementById('lads').innerText = 'Ads are: ' + Ads;
  document.getElementById('ldiscount').innerText = 'Discount is: ' + Discount;
}

// كل ما تكتبي في أي خانة يتحدث تلقائيًا
document.getElementById('price').addEventListener('input', update);
document.getElementById('taxes').addEventListener('input', update);
document.getElementById('ads').addEventListener('input', update);
document.getElementById('discount').addEventListener('input', update);


