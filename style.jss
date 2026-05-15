  /* Simple calculator styles */
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f4f4;
  }

  .calculator {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    max-width: 300px;
    width: 100%;
  }

  .display {
    width: 100%;
    height: 60px;
    font-size: 2rem;
    text-align: right;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  button {
    padding: 15px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    background: #444;
    color: #eee;
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover { background: #555; }

  #equal { grid-column: span 2; background: #0a84ff; color: #fff; }
  #clear { background: #ff3b30; color: #fff; }
  #back  { background: #ff9500; color: #fff; }