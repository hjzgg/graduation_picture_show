;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
            {
                desc: '',
                path: 'img/1.jpg'
            },
            {
                desc: '',
                path: 'img/2.jpg'
            },
            {
                desc: '',
                path: 'img/3.jpg'
            },
            {
                desc: '',
                path: 'img/4.jpg'
            },
            {
                desc: '',
                path: 'img/5.jpg'
            }
            ,
            {
                desc: '',
                path: 'img/6.jpg'
            }
        ];

        var setting = $.extend(defaults, options);

        var self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<img src="' + value.path + '" title="myLove' + (index+1) + '">');
        	self.append(picContent);
        });

        return this;
    };
})(jQuery);

