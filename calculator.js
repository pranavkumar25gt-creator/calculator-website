
  // Calculator logic
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');
  let expression = '';

  function updateDisplay() {
    display.value = expression || '0';
  }

  function safeEval(expr) {
    try {
      const sanitized = expr.replace(/÷/g, '/').replace(/×/g, '*');
      const result = eval(sanitized);
      return isFinite(result) ? result : 'Error';
    } catch {
      return 'Error';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.value;
      const id  = btn.id;

      if (id === 'clear') {
        expression = '';
      } else if (id === 'back') {
        expression = expression.slice(0, -1);
      } else if (id === 'equal') {
        expression = safeEval(expression).toString();
      } else {
        expression += val;
      }
      updateDisplay();
    });
  });

  // Keyboard support
  document.addEventListener('keydown', e => {
    const key = e.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '(', ')', '.'].includes(key)) {
      expression += key;
    } else if (key === 'Enter') {
      expression = safeEval(expression).toString();
    } else if (key === 'Backspace') {
      expression = expression.slice(0, -1);
    } else if (key === 'Escape') {
      expression = '';
    }
    updateDisplay();
  });

  updateDisplay();
  // Calculator logic
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');
  let expression = '';

  function updateDisplay() {
    display.value = expression || '0';
  }

  function safeEval(expr) {
    try {
      const sanitized = expr.replace(/÷/g, '/').replace(/×/g, '*');
      const result = eval(sanitized);
      return isFinite(result) ? result : 'Error';
    } catch {
      return 'Error';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.value;
      const id  = btn.id;

      if (id === 'clear') {
        expression = '';
      } else if (id === 'back') {
        expression = expression.slice(0, -1);
      } else if (id === 'equal') {
        expression = safeEval(expression).toString();
      } else {
        expression += val;
      }
      updateDisplay();
    });
  });

  // Keyboard support
  document.addEventListener('keydown', e => {
    const key = e.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '(', ')', '.'].includes(key)) {
      expression += key;
    } else if (key === 'Enter') {
      expression = safeEval(expression).toString();
    } else if (key === 'Backspace') {
      expression = expression.slice(0, -1);
    } else if (key === 'Escape') {
      expression = '';
    }
    updateDisplay();
  });

  updateDisplay();