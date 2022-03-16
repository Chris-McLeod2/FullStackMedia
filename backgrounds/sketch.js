const p5 = require('node-p5');

function sketchRed(p) {
    p.setup = () => {
        let canvas = p.createCanvas(1920, 1080);
        setTimeout(() => {
            p.saveCanvas(canvas, 'redGrave', 'png').then(filename => {
                console.log(`saved the canvas as ${filename}`);
            });
        }, 100);
    }
    p.draw = () => {
        p.background(100, 10,25);
        //p.text('hello world!', 50, 100);
        p.fill(0)
        p.ellipse(1580,200, 300);
        p.rect(0, 880, 1920, 200);
        p.rect(400, 780, 25, 100);
        p.rect(200, 780, 25, 100);
        p.rect(600, 780, 25, 100);
        p.rect(800, 780, 25, 100);
        p.rect(1000, 780, 25, 100);
        p.rect(1200, 780, 25, 100);
        p.rect(1400, 780, 25, 100);
        p.rect(1600, 780, 25, 100);
    }
}

function sketchCity(p) {
    p.setup = () => {
        let canvas = p.createCanvas(1920, 1080);
        setTimeout(() => {
            p.saveCanvas(canvas, 'cityScape', 'png').then(filename => {
                console.log(`saved the canvas as ${filename}`);
            });
        }, 100);
    }
    p.draw = () => {
        p.background(100, 0,150);
        //p.text('hello world!', 50, 100);
        p.fill(0)
        p.ellipse(1580, 200, 250);
        p.rect(0, 800, 100 , 300);
        p.rect(100, 500, 200 , 600);
        p.rect(300, 700, 200 , 400);
        p.rect(500, 500, 100 , 700);
        p.rect(600, 600, 100 , 800);
        p.rect(700, 200, 50 , 900);
        p.rect(750, 800, 100 , 300);
        p.rect(850, 550, 200 , 800);
        p.rect(1050, 800, 100 , 800);
        p.rect(1150, 700, 300 , 900);
        p.rect(1450, 600, 150 , 800);
        p.rect(1600, 800, 100 , 300);
        p.rect(1700, 200, 200 , 900);
        p.rect(1900, 800, 100 , 300);
    }
}

function sketchSuns(p) {
    p.setup = () => {
        let canvas = p.createCanvas(1920, 1080);
        setTimeout(() => {
            p.saveCanvas(canvas, 'sunScene', 'png').then(filename => {
                console.log(`saved the canvas as ${filename}`);
            });
        }, 100);
    }
    p.draw = () => {
        //let purple = (100, 0, 150)
        //let blue = ()
        p.background(0, 120, 235);
        //p.text('hello world!', 50, 100);
        p.fill(0)
        p.ellipse(960, 540, 400);
        p.ellipse(480, 540, 200);
        p.ellipse(1440, 540, 200);
        p.ellipse(240, 540, 100);
        p.ellipse(1680, 540, 100);
    }

}

function sketchMoons(p) {
    p.setup = () => {
        let canvas = p.createCanvas(1920, 1080);
        setTimeout(() => {
            p.saveCanvas(canvas, 'moonScene', 'png').then(filename => {
                console.log(`saved the canvas as ${filename}`);
            });
        }, 100);
    }
    p.draw = () => {
        //let purple = (100, 0, 150)
        //let blue = ()
        p.background(0, 120, 235);
        //p.text('hello world!', 50, 100);
        p.fill(0)
        p.ellipse(960, 540, 400);
        p.ellipse(480, 540, 200);
        p.ellipse(1440, 540, 200);
        p.ellipse(240, 540, 100);
        p.ellipse(1680, 540, 100);
    }

}



let p5Red = p5.createSketch(sketchRed);
let p5City = p5.createSketch(sketchCity);
let p5Poka = p5.createSketch(sketchSuns);
