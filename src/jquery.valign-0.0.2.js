/**
 * Valign Plugin
 *
 * Plugin para centrar verticalmente un elemento respecto a otro, 
 * sin hacks ni complicaciones del CSS o DOM.
 *
 * Modo de uso: $('table').valign({unit:'em',valignTo:'bottom'});
 *
 * @author:     Alfonso Martin
 * @Copyright   Copyright (c) 2012 Valign Plugin.
 * @license     This valing jQuery plug-in is dual licensed under the MIT and GPL licenses.
 * @link        -
 * @docs        -
 * @version     Version 0.0.2
 *
 **/
;(function($) {
    "use strict";

    var ver = '0.0.2';

    $.fn.valign = function(options) {
        
        var o = {s: this.selector, c: this.context},
            defaults = { 
                unit:     'px',    // unidades del margin-top que inyectaremos: ['px' | 'em']
                valignTo: 'middle' // tipo de alineacion: ['middle' | 'bottom']
            };
        options = $.extend(defaults, options);
        this.each(function(){
            setMarginTop(options,o.s);
        });

        return this;
    };

    function log() {
        if (window.console && console.log)
            console.log('[valing] ' + Array.prototype.join.call(arguments,' '));
    }

    function getElementHeight(dom) {
        return $(dom).outerHeight();
    }

    function getParentHeight(dom) {
        return $(dom).parent().height();
    }

    function getEmHeight(dom) {
        var emHeight,
            divTest = $('<div style="float:none;display:none;font-size:1em;margin:0em;padding:0em;height:auto;line-height:1em;border:0em none;">a</div>').appendTo($(dom));
        emHeight = divTest.height();
        divTest.remove();
        return emHeight;
    }

    function getMarginTop(options,dom){
        var marginTop;
        switch (options.valignTo) { 
            case 'middle': 
                marginTop = Math.ceil((getParentHeight(dom)-getElementHeight(dom)) / 2);
                break;  
            case 'bottom':  
                marginTop = Math.ceil(getParentHeight(dom)-getElementHeight(dom));
                break;  
        }
        if(options.unit == 'em') {
            marginTop = (marginTop/getEmHeight(dom)).toFixed(4) + 'em';
        }
        return marginTop;
    }

    function setMarginTop(options,dom) {
        $(dom).css({'margin-top':getMarginTop(options,dom)});
    }

})(jQuery);