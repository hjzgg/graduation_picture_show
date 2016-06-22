;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
            {
                desc: '',
                path: 'images/1.jpg'
            },
            {
                desc: '',
                path: 'images/2.jpg'
            },
            {
                desc: '',
                path: 'images/3.jpg'
            },
            {
                desc: '',
                path: 'images/4.jpg'
            },
            {
                desc: '',
                path: 'images/5.jpg'
            },
            {
                desc: '',
                path: 'images/6.jpg'
            },
            {
                desc: '',
                path: 'images/7.jpg'
            },
            {
                desc: '',
                path: 'images/8.jpg'
            }
        ];

        if(options){
            if(defaults.length > options.length)
                defaults = [];
        }

        var setting = $.extend(defaults, options);

        let self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<img src="' + value.path + '" title="myLove' + (index+1) + '" />');
        	self.append(picContent);
        });
        return this;
    };
})(jQuery);

