Introduction
============

**Valing** is a small jQuery plugin which allows you to align vertically any HTML element without CSS hacks.

How it works
============

It adds a margin-top, (em or px units) to the absolute positioned layer which we want to align vertically, depending on his parent's height.

Dependencies
============

Requires jQuery 1.8.2 or higher.

### Current version

0.0.3

Usage
=====

HTML:

    <div class="envolvente">
        <div class="texto"><p>Align me!</p></div>
    </div>

CSS:

    .envolvente {position:relative;height:100px;}
    .envolvente .texto {position:absolute;height:20px;}

Javascript:

    $('.envolvente .texto').valign();

### Default configuration

    unit:     'px',    // Units: ['px' | 'em']
    valignTo: 'middle' // Align vertically to: ['middle' | 'bottom']

### More examples

    // Align to middle with px
    $('.envolvente .texto').valign();
    
    // Align to middle with px
    $('.envolvente .texto').valign({unit:'px'});
    
    // Align to bottom with em
    $('.envolvente .texto').valign({unit:'em',valignTo:'bottom'});


Copyright
=========

Copyright © 2014 [alfonsomartinde](http://twitter.com/alfonsomartinde).

License
=========

Valing is under MIT License