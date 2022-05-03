function clearAll() {
  totalCif.textContent = `0`;
  duty.textContent = `0`;
  excise.textContent = `0`;
  vat.textContent = `0`;
  totalTax.textContent = `0`;
  total.textContent = `0`;
}

function formSubmit(e) {
  e.preventDefault();
  let duty = document.querySelector('#duty');
  let excise = document.querySelector('#excise');
  let vat = document.querySelector('#vat');
  let totalCif = document.querySelector('#totalCif');
  let total = document.querySelector('#total');
  let totalTax = document.querySelector('#totalTax');

  let ccRadio = parseInt(
    document.querySelector('input[name="engineSize"]:checked').value
  );
  let cif = parseInt(document.querySelector('#cif').value);

  let carAge = document.querySelector('input[name="carAge"]:checked').value;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  switch (carAge) {
    case 'old':
      switch (ccRadio) {
        case 1000:
          calDuty = 0;
          calExcise = Math.round((cif + 875700) * 0.1 + 875700);
          calVat = 0;
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 1500:
          calDuty = 0;
          calExcise = Math.round((cif + 896550) * 0.1 + 896550);
          calVat = 0;
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 1800:
          calDuty = 0;
          calExcise = Math.round((cif + 1251000) * 0.3 + 1251000);
          calVat = 0;
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 2000:
          calDuty = 0;
          calExcise = Math.round((cif + 1355250) * 0.3 + 1355250);
          calVat = 0;
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 3000:
          calDuty = 0;
          calExcise = calExcise = Math.round((cif + 2814750) * 0.7 + 2814750);
          calVat = 0;
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 3001:
          calDuty = 0;
          calExcise = calExcise = Math.round((cif + 3023250) * 1 + 3023250);
          calVat = 0;
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
      }
      break;
    case 'new':
      switch (ccRadio) {
        case 1000:
          calDuty = Math.round(0.45 * cif);
          calExcise = 0;
          calVat = Math.round(0.14 * (cif + calDuty + calExcise));
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 1500:
          calDuty = Math.round(0.45 * cif);
          calExcise = 0;
          calVat = Math.round(0.14 * (cif + calDuty + calExcise));
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 1800:
          calDuty = Math.round(0.45 * cif);
          calExcise = Math.round(0.1 * (calDuty + cif));
          calVat = Math.round(0.14 * (cif + calDuty + calExcise));
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 2000:
          calDuty = Math.round(0.45 * cif);
          calExcise = Math.round(0.1 * (calDuty + cif));
          calVat = Math.round(0.14 * (cif + calDuty + calExcise));
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 3000:
          calDuty = Math.round(0.45 * cif);
          calExcise = Math.round(1.1 * (calDuty + cif));
          calVat = Math.round(0.14 * (cif + calDuty + calExcise));
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
        case 3001:
          calDuty = Math.round(0.45 * cif);
          calExcise = Math.round(1.4 * (calDuty + cif));
          calVat = Math.round(0.14 * (cif + calDuty + calExcise));
          calTotal = calDuty + calExcise + calVat + cif;
          calTotalTax = calDuty + calExcise + calVat;

          totalCif.textContent = `$${numberWithCommas(cif)}`;
          duty.textContent = `$${numberWithCommas(calDuty)}`;
          excise.textContent = `$${numberWithCommas(calExcise)}`;
          vat.textContent = `$${numberWithCommas(calVat)}`;
          totalTax.textContent = `$${numberWithCommas(calTotalTax)}`;
          total.textContent = `$${numberWithCommas(calTotal)}`;
          break;
      }
      break;
  }
}
