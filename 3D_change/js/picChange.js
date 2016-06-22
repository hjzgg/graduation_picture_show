;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
        	{
        		desc: 'Creative Lifesaver',
        		path: 'images/1.jpg'
        	},
        	{
        		desc: 'Honest Entertainer',
        		path: 'images/2.jpg'
        	},
        	{
        		desc: 'Brave Astronaut',
        		path: 'images/3.jpg'
        	},
        	{
        		desc: 'Affectionate Decision Maker',
        		path: 'images/4.jpg'
        	},
        	{
        		desc: 'Faithful Investor',
        		path: 'images/5.jpg'
        	},
        	{
        		desc: 'Groundbreaking Artist',
        		path: 'images/6.jpg'
        	},
        	{
        		desc: 'Selfless Philantropist',
        		path: 'images/7.jpg'
        	},
            {
                desc: 'Selfless Philantropist',
                path: 'images/8.jpg'
            },
            {
                desc: 'Selfless Philantropist',
                path: 'images/9.jpg'
            },
            {
                desc: 'Selfless Philantropist',
                path: 'images/10.jpg'
            }  
        ];

        var setting = $.extend(defaults, options);

        var self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<li>\
					<a href="http://www.cnblogs.com/hujunzheng/" target="_blank"><img src="' + value.path + '" title="myLove"' + (index+1) +  '/></a>\
					<div class="sb-description">\
						<h3>' + value.desc + '</h3>\
					</div>\
				</li>');
        	self.append(picContent);
        });

        return this;
    };
})(jQuery);

