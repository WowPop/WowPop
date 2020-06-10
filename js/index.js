$(function () {
   
    $(document).ready(function () {
        var stars = 800;
        var $stars = $('.stars');
        var r = 800;
        for (var i = 0; i < stars; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            var $star = $('<div/>').addClass('star');
            $stars.append($star);
        }
        window.CP.exitedLoop(1);
        $('.star').each(function () {
            var cur = $(this);
            var s = 0.2 + Math.random() * 1;
            var curR = r + Math.random() * 300;
            cur.css({
                transformOrigin: '0 0 ' + curR + 'px',
                transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale(' + s + ',' + s + ')'
            });
        });

        // 手风琴
        $('[class*="-accordion"]').not(':first').parents('.accordion-DIV').hide();
				$('.btn-group > button').on('click', function(event) {
					event.preventDefault();
					var _index_ = $(this).index();
					$('[class*="-accordion"]').eq(_index_).parents('.accordion-DIV').show().siblings().hide();
				});
    });

    $('#fullpage').fullpage({
        navigation: true,
        scrollingSpeed:1500,
        navigationColor:'#ffffff',
        navigationTooltips:['首页','个人标签','前端技能','我的作品','联系我'],
        css3:'ture',
        anchors:['page1','page2','page3','page4','page5'],
        /* index:当前屏的索引，索引从1开始*/
       afterLoad:function(anchorLink,index){
           /*将其它屏的current样式标记清除*/
           $(".section").removeClass("current");
           setTimeout(function(){
               /*当滚动到某一个屏之后，添加样式标记*/
               $(".section").eq(index-1).addClass("current");},500);
       },
       /* 组件初始完毕或者插件内容渲染完毕 */    
       afterRender:() => {
           let current_pages = window.location.hash;
        //    $(".header_right_icon a").each((index,val) => {
        //         // console.log('aaa',,val,index)
        //         if($('a',this).attr('href') == current_pages) {
        //             $(this).siblings().removeClass('active');  // 删除其他兄弟元素的样式
        //             $(this).addClass('active');   // 添加当前元素的样式
        //             return;
        //         }
        //     })
            $(".header_right_icon > a").click(function() {
                $(this).siblings().removeClass('active');  // 删除其他兄弟元素的样式
                $(this).addClass('active');   // 添加当前元素的样式
            });
       },
       

    });
});