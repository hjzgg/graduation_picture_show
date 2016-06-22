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
            }
            ,
            {
                desc: '',
                path: 'images/6.jpg'
            }
            ,
            {
                desc: '',
                path: 'images/7.jpg'
            }
            ,
            {
                desc: '',
                path: 'images/8.jpg'
            }
            ,
            {
                desc: '',
                path: 'images/9.jpg'
            },
            {
                desc: '',
                path: 'images/10.jpg'
            }
        ];

        var setting = $.extend(defaults, options);

        var self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<li><img src="' + value.path + '" title="myLove' + (index+1) + '" /></li>');
        	self.append(picContent);
        });

        return this;
    };
})(jQuery);

