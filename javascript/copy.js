var clipboard = new Clipboard('.copy-btn');    //clipboard.min.jsが動作する要素をクラス名で指定

//クリックしたときの挙動
$(function () {
	$('.copy-btn').click(function () {
		$(this).addClass('copied');    //ボタンの色などを変更するためにクラスを追加
		window.alert('URLをコピーしました');    //テキストの書き換え
	});
});