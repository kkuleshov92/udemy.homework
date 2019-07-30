class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize,
        this.textAlign = textAlign;
    }

    createDiv() {
        let newDiv = document.createElement('div');
        
        newDiv.textContent = 'Hello, I\'m new div';

        newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; text-align: ${this.textAlign}; font-size: ${this.fontSize}px;`;


        document.body.insertAdjacentElement('beforeend', newDiv);
    }
}

let propertyDiv1 = [300, 500, 'green', 20, 'center'];
let propertyDiv2 = [500, 300, 'red', 14, 'right'];

let myDiv1 = new Option(...propertyDiv1);
let myDiv2 = new Option(...propertyDiv2);

myDiv1.createDiv();
myDiv2.createDiv();