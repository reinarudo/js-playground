(function($) {
    $.fn.shuffleString  = function(options) {

        var settings = $.extend({
            color: "#000000",
            done: null
        }, options);

        return this.each(function() {
            $(this).text( shuffleString( $(this).text() ) );
            $(this).css('color', settings.color);
            if ($.isFunction(settings.done)) {
                settings.done.call(this);
            }

            function shuffleString(str) {

                var array = str.split("");
                for (var index = array.length - 1; index > 0; index--) {
                    var val = Math.floor(Math.random() * (index + 1)); //generate number from 0 to index val e.g. if index is 6 then val may be 0-6
                    var temp = array[index]; // val before reshuffling the char
                    array[index] = array[val];
                    array[val] = temp; //new 
                }

                return array.join("");
            }
        });
    }
})(jQuery);