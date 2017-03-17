const CSS = `
  <style>
    #cons {
      display: block;
      width: 100%;
      background: black;
      color: #fff;
      font-family: 'Courier', 'Courier New', monospace;
    }

    #cons span {
      display: block;
      border-bottom: 1px solid #333333;
    }
    
    #cons span.error {
      color: red;
    }

    #cons span.warn {
      color: yellow;
    }

    #cons span:before {
      content: '> '; 
    }
  </style>`;


class Console {
  constructor() {
    document.getElementsByTagName('body')[0].innerHTML+=`${CSS}<div id="cons"></div>`;
    this.console = document.getElementById('cons'); 
  }

  log (text, cssClass='') {
    this.console.innerHTML +=  `<span class="${cssClass}">${text}</span>`;
  }

  error(text) {
    this.log(text, 'error');
  }

  warn(text) {
    this.log(text, 'warn');
  }
}

console = new Console();

console.log('test');
console.warn('test2');
console.error('test3');