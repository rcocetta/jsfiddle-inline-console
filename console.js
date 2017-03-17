const CSS = `
  <style>
    #cons {
      width: 100%;
      background: #000;
      color: #fff;
      font-family: 'Courier', 'Courier New', monospace;
      position: fixed;
      bottom: 0;
      z-index: 1000;
    }

    #cons > span {
      display: block;
      border-bottom: 1px solid #333333;
    }

    #cons > span:before {
      content: '> ';
    }

    #cons span.error {
      color: red;
    }

    #cons span.warn {
      color: yellow;
    }

  </style>`;


class Console {
  constructor() {
    document.getElementsByTagName('body')[0].innerHTML += `${CSS}<div id="cons"></div>`;
    this.console = document.getElementById('cons');
  }

  log (text, cssClass='log') {
    this.console.innerHTML +=  `<span class="${cssClass}">${text}</span>`;
  }

  error(text) {
    this.log(text, 'error');
  }

  warn(text) {
    this.log(text, 'warn');
  }
  line() {
    this.log('<hr/>');
  }
}

console = new Console();

console.log('----- YOUR CONSOLE IS WORKING ---- ');
