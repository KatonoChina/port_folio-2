		
//----↓ここから要素出現時アニメーション
var scrollAnimationElm = document.querySelectorAll('.sa, .saslow');
var scrollAnimationFunc = function() {
	for(var i = 0; i < scrollAnimationElm.length; i++) {
		var triggerMargin = 50;
		var elm = scrollAnimationElm[i];
		var showPos = 0;
		if(elm.dataset.sa_margin != null) {
			triggerMargin = parseInt(elm.dataset.sa_margin);
		}
		if(elm.dataset.sa_trigger) {
			showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;
		} else {
			showPos = elm.getBoundingClientRect().top + triggerMargin;
		}
		if (window.innerHeight > showPos) {
			var delay = (elm.dataset.sa_delay)? elm.dataset.sa_delay : 0;
			setTimeout(function(index) {
				scrollAnimationElm[index].classList.add('show');
			}.bind(null, i), delay);
		}
	}
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);		
//----↑ここまで要素出現時アニメーション
		
		
//----↓ここからハンバーガーメニュー
$(function() {
const hum = $('.hum-btn, .humOption')
const nav = $('.hum-navi, .hum-btn')
hum.on('click', function(){
	nav.toggleClass('toggle');
});
});
//----↑ここまでハンバーガーメニュー

//----↓ここから背景画像切り替え
$(function(){
	$(".contents").each(function(i, elem){
		var one = $(elem).offset().top;
		$(window).on("load scroll resize", function(){
			var two = $(window).height();
			var three = $(window).scrollTop();
			var showClass = "showbg";
			var timing = 250; // 50px, add to css
			if (three >= one - two + timing){
				$(elem).addClass(showClass);
			} else {
				$(elem).removeClass(showClass);
			}
		});
	});
});
//----↑ここまで背景画像切り替え

//----↓ここからスムーススクロール
// 1. すべてのhref="#"のaタグを取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
// 2. 1のaタグにそれぞれクリックイベントを設定
for (let i = 0; i < smoothScrollTrigger.length; i++) {
	smoothScrollTrigger[i].addEventListener('click', (e) => {

		// 3. ターゲットの位置を取得
		e.preventDefault();
		let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
		let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得

		const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
		const offset = window.pageYOffset; // 現在のスクロール量を取得
		const gap = 60; // 固定ヘッダー分の高さ
		const target = rect + offset - gap; //最終的な位置を割り出す

		// 4. スムースにスクロール
		window.scrollTo({
			top: target,
			behavior: 'smooth',
		});
	});
}
//----↑ここまでスムーススクロール
		
//----↓ここからworksタイトル出現

var scrollStart = $('.works-start').offset().top; //ページ上部からの距離を取得
var scrollEnd = $('.works-end').offset().top; //ページ上部からの距離を取得
var windowHeight = $(window).height(); //ウインドウの高さを取得
var distance = 0;

$(document).scroll(function(){
	distance = $(this).scrollTop()+$(window).height(); //スクロールした距離を取得(ウィンドウ最下部)

	if (scrollStart <= distance) { //スクロール距離がstartの位置を超えたら
		$('.works-start').addClass('bl-fixed'); //fixedというclassを追加
	} else if (scrollStart >= distance) { //スクロールがページ上部まで戻ったら
		$('.works-start').removeClass('bl-fixed'); //classを削除
	}

	if (scrollEnd <= distance + windowHeight/4) { //スクロール距離がendの位置を超えたら
		$('.works-start').fadeOut(); //フェードアウト
	} else{
		$('.works-start').fadeIn(); //endより上部に戻ったらフェードイン
	}
});
//----↑ここまでworksタイトル出現
		
//----↓ここからprofile-elements psa出現
var profScroll = $('.profile-elements').offset().top; //.profile-elementsの要素までのページ上部からの距離を取得
var profDistance = 0;

$(document).scroll(function(){
	profDistance = $(this).scrollTop()+$(window).height(); //スクロールした距離を取得(ウィンドウ最下部)

	if (profScroll <= profDistance) { //スクロール距離がstartの位置を超えたら
		$('.psa').addClass('show'); //.psaにshowというclassを追加
	}
});
//----↑ここまでprofile-elements psa出現
		
//========↓ここからtitle系出現
//----↓ここからprof-cont-title tsa出現
var pTitleScroll = $('.prof-title').offset().top; //prof-cont-titleの要素までのページ上部からの距離を取得
var pTitleDistance = 0;

$(document).scroll(function(){
	pTitleDistance = $(this).scrollTop()+$(window).height(); //スクロールした距離を取得(ウィンドウ最下部)

	if (pTitleScroll <= pTitleDistance) { //スクロール距離がstartの位置を超えたら
		$('.ptsa').addClass('show'); //fixedというclassを追加
	}
});
//----↑ここまでprof-cont-title tsa出現

//----↓ここからskills-cont-title csa出現
var sTitleScroll = $('.skills-cont-title').offset().top; //要素までのページ上部からの距離を取得
var sTitleDistance = 0;

$(document).scroll(function(){
	sTitleDistance = $(this).scrollTop()+$(window).height(); //スクロールした距離を取得(ウィンドウ最下部)

	if (sTitleScroll <= sTitleDistance) { //スクロール距離がstartの位置を超えたら
		$('.stsa').addClass('show'); //fixedというclassを追加
	}
});
//----↑ここまでskills-cont-title csa出現

//----↓ここからworks-cont-title wtsa出現 (スマホ用)
var wTitleScroll = $('.works-start').offset().top; //要素までのページ上部からの距離を取得
var wTitleDistance = 0;

$(document).scroll(function(){
	wTitleDistance = $(this).scrollTop()+$(window).height(); //スクロールした距離を取得(ウィンドウ最下部)

	if (wTitleScroll <= wTitleDistance) { //スクロール距離がstartの位置を超えたら
		$('.wtsa').addClass('show'); //fixedというclassを追加
	}
});
//----↑ここまでworks-cont-title wtsa出現 (スマホ用)
		
//----↓ここからcontact-cont-title csa出現
var cTitleScroll = $('.contact-cont-title').offset().top; //要素までのページ上部からの距離を取得
var cTitleDistance = 0;

$(document).scroll(function(){
	cTitleDistance = $(this).scrollTop()+$(window).height(); //スクロールした距離を取得(ウィンドウ最下部)

	if (cTitleScroll <= cTitleDistance) { //スクロール距離がstartの位置を超えたら
		$('.ctsa').addClass('show'); //fixedというclassを追加
	}
});
//----↑ここまでcontact-cont-title csa出現
//========↑ここまでtitle系出現
		
		
//----↓ここからskills-pic
$(function(){
	$(window).scroll(function (){
		$('.spsa').each(function(){
			var target = $(this).offset().top; //要素の位置の取得
			var scroll = $(window).scrollTop(); //スクロール量を取得
			var windowHeight = $(window).height(); //ウィンドウの高さを取得

			//目的の要素が画面内に少し入ったらクラスを付与する
			if (scroll > target - windowHeight + 200){
				$(this).addClass('show');
			}
		});
	});
});
//----↑ここまでskills-pic
		

		
//----↓ここからタイピングアニメーション
//テキストごとにspanタグを生成する
var element = $(".typ-t");
var thisChild = ""
element.each(function () {
	var text = $(this).html();
	var textbox = "";
	text.split('').forEach(function (target) {
		if (target !== " ") {
			textbox += '<span>' + target + '</span>';
		} else {
			textbox += target;
		}
	});
	$(this).html(textbox);
});
		
// タイピングアニメーション
$(element).each(function () {
	thisChild = $(this).children(); //生成したspanタグを取得
	thisChild.each(function (i) {
		var time = 100;
		$(this).delay(time * i).fadeIn(time);
	});
});
//----↑ここまでタイピングアニメーション
