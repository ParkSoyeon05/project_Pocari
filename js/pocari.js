$(document).ready(function () {
    var sec1Ul = $('.section.sec1>ul');
    var sec1UlLi = $('.section.sec1>ul>li');
    var sec1UlLiLength = $('.section.sec1>ul>li').length;
    
    //이미지 삽입
    for(var i=0; i<sec1UlLiLength; i++){
        sec1UlLi.eq(i).css({'background':'url(img/main'+i+'.jpg) no-repeat 50%'}).css({'backgroundSize':'cover'});
    }
    
    //슬라이드
//    var sec1UlLiLeft = sec1UlLi.eq(1).offset().left - sec1UlLi.eq(0).offset().left;
//    
//    var key=1;
//    function autoGallery(e) {
//        sec1Ul.animate({left:-sec1UlLiLeft*key});
//        if(key>sec1UlLiLength-2){
//            key=0;
//            sec1Ul.delay(3000).animate({left:-sec1UlLiLeft*key},0);
//        }
//        sec1Ul.eq(0).delay(2000); 
//        key++;
//        console.log(sec1Ul.css('left'));
////        console.log(sec1UlLiLength);
//        console.log(key);
//    }
//    setInterval(autoGallery, 3000);
//    
});

