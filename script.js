let display = document.getElementById('display');
let submenu = document.getElementById('submenu');
let extraArea = document.getElementById('extraArea');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Submenu Toggle
document.getElementById('menuBtn').addEventListener('click', () => {
  submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
});

// Scientific Mode
document.getElementById('scientificMode').addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  extraArea.innerHTML = `
    <div>
      <button onclick="scientific('sqrt')">√</button>
      <button onclick="scientific('pow')">x²</button>
      <button onclick="scientific('sin')">sin</button>
      <button onclick="scientific('cos')">cos</button>
      <button onclick="scientific('tan')">tan</button>
    </div>
  `;
});

function scientific(func) {
  let val = parseFloat(display.value);
  let result = 0;
  switch (func) {
    case 'sqrt': result = Math.sqrt(val); break;
    case 'pow': result = Math.pow(val, 2); break;
    case 'sin': result = Math.sin(val * Math.PI / 180); break;
    case 'cos': result = Math.cos(val * Math.PI / 180); break;
    case 'tan': result = Math.tan(val * Math.PI / 180); break;
  }
  display.value = result;
}

// Unit Conversion
document.getElementById('unitConversion').addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  extraArea.innerHTML = `
    <p>Convert meters to kilometers:</p>
    <input type="number" id="unitInput" placeholder="Meters">
    <button onclick="convertUnit()">Convert</button>
  `;
});

function convertUnit() {
  const val = document.getElementById('unitInput').value;
  if (val) extraArea.innerHTML += `<p>${val} meters = ${val / 1000} kilometers</p>`;
}

// Currency Conversion (Simple Static Example)
document.getElementById('currencyConversion').addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  extraArea.innerHTML = `
    <p>Convert USD to PKR (1 USD = 280 PKR)</p>
    <input type="number" id="currInput" placeholder="USD">
    <button onclick="convertCurrency()">Convert</button>
  `;
});

function convertCurrency() {
  const val = document.getElementById('currInput').value;
  if (val) extraArea.innerHTML += `<p>${val} USD = ${val * 280} PKR</p>`;
}
