// https://www.omnicalculator.com/chemistry/theoretical-yield#theoretical-yield-formula

// calculators not working

const v11 =  document.getElementById('v11');
const v21 = document.getElementById('v21');
const v31 = document.getElementById('v31');
const btn1 = document.getElementById('btn1');
const result1 = document.getElementById('result1');

// radio buttons
const massRadio1 = document.getElementById('massRadio1');
const molecularweightRadio1 = document.getElementById('molecularweightRadio1');
const molesRadio1 = document.getElementById('molesRadio1');
const stoichiometryRadio1 = document.getElementById('stoichiometryRadio1');

let mass1;
let molecularweight1 = v11;
let moles1 = v21;
let stoichiometry1 = v31;

// labels of the inpust
const variable11 = document.getElementById('variable11');
const variable21 = document.getElementById('variable21');
const variable31 = document.getElementById('variable31');

massRadio1.addEventListener('click', function() {
  variable11.textContent = 'Molecular weight';
  variable21.textContent = 'Moles';
  variable31.textContent = 'Stoichiometry';
  molecularweight1 = v11;
  moles1 = v21;
  stoichiometry1 = v31;
  result1.textContent = '';
});

molecularweightRadio1.addEventListener('click', function() {
  variable11.textContent = 'Mass';
  variable21.textContent = 'Moles';
  variable31.textContent = 'Stoichiometry';
  mass1 = v11;
  moles1 = v21;
  stoichiometry1 = v31;
  result1.textContent = '';
});

molesRadio1.addEventListener('click', function() {
  variable11.textContent = 'Mass';
  variable21.textContent = 'Molecular weight';
  variable31.textContent = 'Stoichiometry';
  mass1 = v11;
  molecularweight1 = v21;
  stoichiometry1 = v31;
  result1.textContent = '';
});

stoichiometryRadio1.addEventListener('click', function() {
  variable11.textContent = 'Mass';
  variable21.textContent = 'Molecular weight';
  variable31.textContent = 'Moles';
  mass1 = v11;
  molecularweight1 = v21;
  moles1 = v31;
  result1.textContent = '';
});

btn1.addEventListener('click', function() {
  
  if(massRadio1.checked)
    result1.textContent = `Mass = ${computeMass1().toFixed(2)}`;

  else if(molecularweightRadio1.checked)
    result1.textContent = `Molecular weight = ${computeMolecularweight1().toFixed(2)}`;

  else if(molesRadio1.checked)
    result1.textContent = `Moles = ${computeMoles1().toFixed(2)}`;

  else if(stoichiometryRadio1.checked)
    result1.textContent = `Stoichiometry = ${computeStoichiometry1().toFixed(2)}`;
})

// calculation

function computeMass1() {
  return Number(moles1.value) * Number(molecularweight1.value) * Number(stoichiometry1.value);
}

function computeMolecularweight1() {
  return Number(mass1.value) / (Number(moles1.value) * Number(stoichiometry1.value));
}

function computeMoles1() {
  return Number(mass1.value) / (Number(molecularweight1.value) * Number(stoichiometry1.value));
}

function computeStoichiometry1() {
  return Number(mass1.value) / (Number(moles1.value) * Number(molecularweight1.value));
}

// ---------------------------------------------------------------------------------------------------------------------


const v12 =  document.getElementById('v12');
const v22 = document.getElementById('v21');
const v32 = document.getElementById('v32');
const btn2 = document.getElementById('btn2');
const result2 = document.getElementById('result2');

// radio buttons
const molesRadio2 = document.getElementById('molesRadio2');
const stoichiometryRadio2 = document.getElementById('stoichiometryRadio2');
const molecularweightRadio2 = document.getElementById('molecularweightRadio2');
const theoreticalyieldRadio2 = document.getElementById('theoreticalyieldRadio2');

let moles2;
let stoichiometry2 = v12;
let molecularweight2 = v22;
let theoreticalyield2 = v32;

// labels of the inpust
const variable12 = document.getElementById('variable12');
const variable22 = document.getElementById('variable22');
const variable32 = document.getElementById('variable32');

molesRadio2.addEventListener('click', function() {
  variable12.textContent = 'Stoichiometry';
  variable22.textContent = 'Molecular weight';
  variable32.textContent = 'Theoretical yield';
  stoichiometry2 = v12;
  molecularweight2 = v22;
  theoreticalyield2 = v32;
  result2.textContent = '';
});

stoichiometryRadio2.addEventListener('click', function() {
  variable12.textContent = 'Moles';
  variable22.textContent = 'Molecular weight';
  variable32.textContent = 'Theoretical yield';
  moles2 = v22;
  molecularweight2 = v22;
  theoreticalyield2 = v32;
  result2.textContent = '';
});

molecularweightRadio2.addEventListener('click', function() {
  variable12.textContent = 'Moles';
  variable22.textContent = 'Stoichiometry';
  variable32.textContent = 'Theoretical yield';
  moles2 = v22;
  stoichiometry2 = v22;
  theoreticalyield2 = v32;
  result2.textContent = '';
});

theoreticalyieldRadio2.addEventListener('click', function() {
  variable12.textContent = 'Moles';
  variable22.textContent = 'Stoichiometry';
  variable32.textContent = 'Molecular weight';
  moles2 = v22;
  stoichiometry2 = v22;
  molecularweight2 = v32;
  result2.textContent = '';
});

btn2.addEventListener('click', function() {
  
  if(molesRadio2.checked)
    result2.textContent = `Moles = ${computeMoles2().toFixed(2)}`;

  else if(stoichiometryRadio2.checked)
    result2.textContent = `Stoichiometry = ${computeStoichiometry2().toFixed(2)}`;

  else if(molecularweightRadio2.checked)
    result2.textContent = `Molecular weight = ${computeMolecularweight2().toFixed(2)}`;

  else if(theoreticalyieldRadio2.checked)
    result2.textContent = `Theoretical yield = ${computeTheoreticalyield2().toFixed(2)}`;
})

// calculation

function computeMoles2() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(usefulLifeinYears.value);
}

function computeStoichiometry2() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeMolecularweight2() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeTheoreticalyield2() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}