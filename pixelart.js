const sizePicker = document.querySelector('.size-picker');
const pixelCanvas = document.querySelector('.pixel-canvas');
const quickFill = document.querySelector('.quick-fill');
const eraseMode = document.querySelector('.erase-mode');
const drawMode = document.querySelector('.draw-mode');

function makeGrid() {
  let gridHeight = document.querySelector('.input-height').value;
  let gridWidth = document.querySelector('.input-width').value;
  // If grid already present, clears any cells that have been filled in
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  // Creates rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // Fills in cell with selected color upon mouse press ('mousedown', unlike 'click', doesn't also require release of mouse button)
      gridCell.addEventListener('mousedown', function() {
        const color = document.querySelector('.color-picker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

makeGrid(25, 25);

// Upon user's submitting height and width selections, callback function (inside method) calls makeGrid function. But event method preventDefault() first intercepts the 'submit' event, which would normally submit the form and refresh the page, preventing makeGrid() from being processed
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});

// Enables color dragging with selected color (code for filling in single cell is above). (No click on 'draw' mode needed; this is default mode)
let down = false; // Tracks whether or not mouse pointer is pressed

// Listens for mouse pointer press and release on grid. Changes value to true when pressed, but sets it back to false as soon as released
pixelCanvas.addEventListener('mousedown', function(e) {
	down = true;
	pixelCanvas.addEventListener('mouseup', function() {
		down = false;
	});
  // Ensures cells won't be colored if grid is left while pointer is held down
  pixelCanvas.addEventListener('mouseleave', function() {
    down = false;
  });

  pixelCanvas.addEventListener('mouseover', function(e) {
    // 'color' defined here rather than globally so JS checks whether user has changed color with each new mouse press on cell
    const color = document.querySelector('.color-picker').value;
    // While mouse pointer is pressed and within grid boundaries, fills cell with selected color. Inner if statement fixes bug that fills in entire grid
  	if (down) {
      // 'TD' capitalized because element.tagName returns upper case for DOM trees that represent HTML elements
      if (e.target.tagName === 'TD') {
      	e.target.style.backgroundColor = color;
      }
    }
  });
});

// Adds color-fill functionality. e.preventDefault(); intercepts page refresh on button click
quickFill.addEventListener('click', function(e) {
  e.preventDefault();
  const color = document.querySelector('.color-picker').value;
  pixelCanvas.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);
});

// Removes color from cell upon double-click
pixelCanvas.addEventListener('dblclick', e => {
  e.target.style.backgroundColor = null;
});

// NONDEFAULT DRAW AND ERASE MODES:

// Allows for drag and single-cell erasing upon clicking 'erase' button. Code for double-click erase functionality (Without entering erase mode) is above. Also note 'down' was set to false in variable above
eraseMode.addEventListener('click', function() {
  // Enables drag erasing while in erase mode
  pixelCanvas.addEventListener('mousedown', function(e) {
  	down = true;
  	pixelCanvas.addEventListener('mouseup', function() {
  		down = false;
  	});
    // Ensures cells won't be erased if grid is left while pointer is held down
    pixelCanvas.addEventListener('mouseleave', function() {
      down = false;
    });
    pixelCanvas.addEventListener('mouseover', function(e) {
      // While mouse pointer is pressed and within grid boundaries, empties cell contents. Inner if statement fixes bug that fills in entire grid
    	if (down) {
        if (e.target.tagName === 'TD') {
        	e.target.style.backgroundColor = null;
        }
      }
    });
  });
  // Enables single-cell erase while in erase mode
  pixelCanvas.addEventListener('mousedown', function(e) {
    e.target.style.backgroundColor = null;
  });
});

// Allows user to return to (default) draw mode after using 'erase' button. Note 'down' was set to false in variable above
drawMode.addEventListener('click', function() {
  pixelCanvas.addEventListener('mousedown', function(e) {
  	down = true;
  	pixelCanvas.addEventListener('mouseup', function() {
  		down = false;
  	});
    // Ensures cells won't be colored if grid is left while pointer is held down
    pixelCanvas.addEventListener('mouseleave', function() {
      down = false;
    });
    pixelCanvas.addEventListener('mouseover', function(e) {
      const color = document.querySelector('.color-picker').value;
      // While mouse pointer is pressed and within grid boundaries, fills cell with selected color. Inner if statement fixes bug that fills in entire grid
    	if (down) {
        if (e.target.tagName === 'TD') {
        	e.target.style.backgroundColor = color;
        }
      }
    });
  });
  // Enables single-cell coloring while in draw mode
  pixelCanvas.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'TD') return;
    const color = document.querySelector('.color-picker').value;
    e.target.style.backgroundColor = color;
  });
});

let image = document.getElementById("changing-img");

document.addEventListener('keydown', function(evt){
    // console.log(evt.code, evt.key);
    if(evt.metaKey == false){
        //clearInterval(interval);
        title.innerHTML = evt.key;
        keyspressed.push(evt.key);
    }

});

document.addEventListener('keydown', function(evt){
  
    switch(evt.key){
        case '`':
            image.src = "png/`.png";
            break;
        case '1':
            image.src = "png/1.png";
            break;
        case '2':
            image.src = "png/2.png";
            break;
        case '3':
            image.src = "png/3.png";
            break;
        case '4':
            image.src = "png/4.png";
            break;   
        case '5':
            image.src = "png/5.png";
            break;    
        case '6':
            image.src = "png/6.png";
            break;
        case '7':
            image.src = "png/7.png";
            break;
        case '8':
            image.src = "png/8.png";
            break;
        case '9':
            image.src = "png/9.png";
            break;
        case '0':
            image.src = "png/0.png";
            break;
        case '-':
            image.src = "png/-.png";
            break;
        case '=':
            image.src = "png/=.png";
            break;
        case 'Backspace':
            image.src = "png/backspace.png";
            break;
        case 'Tab':
            image.src = "png/tab.png";
            break;
        case 'q':
            image.src = "png/qbanana.png";
            break;
        case 'w':
            image.src = "png/wizard.png";
            break;
        case 'e':
            image.src = "png/emoji.png";
            break;
        case 'r':
            image.src = "png/roblox.png";
            break;
        case 't':
            image.src = "png/totoro.png";
            break;
        case 'y':
            image.src = "png/yoda.png";
            break;
        case 'u':
            image.src = "png/undertale.png";
            break;
        case 'i':
            image.src = "png/inosuke.png";
            break;
        case 'o':
            image.src = "png/omen.png";
            break;
        case 'p':
            image.src = "png/po.png";
            break;
        case '[':
            image.src = "png/[.png";
            break;
        case ']':
            image.src = "png/].png";
            break;
        case '\\':
            image.src = "png/slash.png";
            break;
        case 'CapsLock':
            image.src = "png/capslock.png";
            break;
        case 'a':
            image.src = "png/amongus.png";
            break;
        case 's':
            image.src = "png/spongebob.png";
            break;
        case 'd':
            image.src = "png/doge.png";
            break;
        case 'f':
            image.src = "png/frog.png";
            break;
        case 'g':
            image.src = "png/groot.png";
            break;
        case 'h':
            image.src = "png/hatsunemiku.png";
            break;
        case 'j':
            image.src = "png/jojo.png";
            break;
        case 'k':
            image.src = "png/kirby.png";
            break;
        case 'l':
            image.src = "png/luigi.png";
            break;
        case ';':
            image.src = "png/;.png";
            break;
        case "'":
            image.src = "png/'.png";
            break;
        case 'Enter':
            image.src = "png/enter.jpeg";
            break;
        case 'Shift':
            image.src = "png/shift.png";
            break;
        case 'z':
            image.src = "png/zdino.png";
            break;
        case 'x':
            image.src = "png/xenomorph.png";
            break;
        case 'c':
            image.src = "png/creeper.png";
            break;
        case 'v':
            image.src = "png/vegeta.png";
            break;
        case 'b':
            image.src = "png/bruh.png";
            break;
        case 'n':
            image.src = "png/noface.png";
            break;
        case 'm':
            image.src = "png/minion.png";
            break;
        case ',':
            image.src = "png/,.png";
            break;
        case '.':
            image.src = "png/period.png";
            break;
        case '/':
            image.src = "png/slash2.png";
            break;
        case 'Control':
            image.src = "png/control.png";
            break;
        case 'Alt':
            image.src = "png/alt.png";
            break;
        case 'Meta':
            image.src = "png/meta.png";
            break;
        case " ":
            image.src = "png/spacebar.png";
            break;
        case 'ArrowLeft':
            image.src = "png/arrowleft.png";
            break;
        case 'ArrowUp':
            image.src = "png/arrowup.png";
            break;
        case 'ArrowRight':
            image.src = "png/arrowright.png";
            break;
        case 'ArrowDown':
            image.src = "png/arrowdown.png";
            break;
    }

})