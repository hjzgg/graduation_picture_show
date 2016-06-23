;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
        	{
        		desc: '寝室四兄弟',
        		path: 'images/1.jpg'
        	},
        	{
        		desc: '那些年一起装B的岁月',
        		path: 'images/2.jpg'
        	},
        	{
        		desc: '计科二班全体帅哥',
        		path: 'images/3.jpg'
        	},
        	{
        		desc: '男生西装and女生汉服at图书馆',
        		path: 'images/4.jpg'
        	},
        	{
        		desc: 'cs2造型',
        		path: 'images/5.jpg'
        	},
        	{
        		desc: 'c++造型',
        		path: 'images/6.jpg'
        	},
        	{
        		desc: '二嫂在哦，中间大哥哦',
        		path: 'images/7.jpg'
        	},
            {
                desc: '牛不牛B啊',
                path: 'images/8.jpg'
            },
            {
                desc: '兴奋的跳跃',
                path: 'images/9.jpg'
            },
            {
                desc: '大哥飞的真高',
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

