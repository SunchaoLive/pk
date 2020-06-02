// +-----------------------------------
// | js鏂囦欢 <渚濊禆jQuery妗嗘灦>
// +-----------------------------------
$(document).ready(function(e) {
	
	//+--------------------------------
	//| 鎼滅储涓嬫媺閫夋嫨
	//+--------------------------------
	
	// 榛樿鏄剧ず绗竴涓�
	$('#search_site_cur').html( $('#search_site_list span').eq(0).html() );
	$('#search_form').attr('action', $('#search_site_list span').eq(0).attr('action'));
	$('.kw').attr('name', $('#search_site_list span').eq(0).attr('query'));
	// 鏄剧ず涓嬫媺
	$('.search_site').hover(function(e) {
		$('#search_site_list').addClass('cur');
    }, function(e) {
        $('#search_site_list').removeClass('cur');
    });
	// 涓嬫媺鑳屾櫙鍙樿壊
	$('#search_site_list span').hover(function(e) {
        $(this).addClass('cur');
    }, function(e) {
        $(this).removeClass('cur');
    }).click(function(e) {
        // 閫変腑
		$('#search_site_cur').html( $(this).html() );
		$('#search_form').attr('action', $(this).attr('action'));
		$('.kw').attr('name', $(this).attr('query'));
		$('#search_site_list').removeClass('cur');
    });
	
	//+--------------------------------
	//| 瀵艰埅涓嬫媺鑿滃崟
	//+--------------------------------
	
	var timeout_int = 0;
	var timeout_delay = 500;
	var this_index = new Object(); // 褰撳墠瀵硅薄绱㈠紩
	
	$('.nav_list_li_title').hover(function(e) {
		if(timeout_int) {
			window.clearTimeout(timeout_int);
			this_index.removeClass('on');
		}
		$(this).siblings('.nav_list_li_ul').addClass('on');
	}, function(e) {
		this_index = $(this).siblings('.nav_list_li_ul');
		timeout_int = window.setTimeout(function(e) { this_index.removeClass('on'); }, timeout_delay);
	});
	
	$('.nav_list_li_ul').hover(function(e) {
		window.clearTimeout(timeout_int);
	}, function(e) {
		$(this).removeClass('on');
	});
	
	//+--------------------------------
	//| 骞垮憡寤惰繜鍔犺浇
	//+--------------------------------
	
});
//鐧惧害鍒嗕韩浠ｇ爜
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];