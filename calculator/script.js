function appendToScreen(data) {
    document.getElementById('screen').value += data;
  }
  
  function clearScreen() {
    document.getElementById('screen').value = '';
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById('screen').value);
      document.getElementById('screen').value = result;
    } catch (error) {
      document.getElementById('screen').value = 'Error';
    }
  }