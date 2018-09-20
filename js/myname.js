function getTop(clsName){ 
            var obj = document.getElementsByClassName(clsName);
            for(var i=0;i<obj.length;i++)
            return obj[i].getBoundingClientRect().top;
        }

        function getDom(clsName){
            var obj=document.getElementsByClassName(clsName);
            for(var i=0;i<obj.length;i++)
            return obj[i];
        }
        var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
        var bannerHeight = document.documentElement.clientHeight || document.body.clientHeight;
function is_mobile() { 
    var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i; 
    var u = navigator.userAgent; 
    if (null == u) { 
        return true; 
    } 
    var result = regex_match.exec(u); 
    if (null == result) { 
        return false 
    } else { 
        return true 
    } 
}
if (is_mobile()) {
    $(document).ready(function() {
        $(".s1 h3").removeClass('animated1');
        $('.s1-h3').removeClass('animated1');
        $('.s1-h4').removeClass('animated1');
        $('.row1').removeClass('animated1');
        $('.row2').removeClass('animated1');
        $('.row3').removeClass('animated1');
        $('.row4').removeClass('animated1');
    });
}
        window.addEventListener('scroll',function(){  
            /*business的触发*/
            if (!is_mobile()) {
                if(getTop('s1')< bannerHeight-100 ){
                    getDom('s1-h3').classList.add('done1');
                    getDom('s1-h4').classList.add('done1');
                    getDom('row1').classList.add('done2');
                    getDom('row2').classList.add('done3');
                    getDom('row3').classList.add('done4');
                    getDom('row4').classList.add('done5');
                }
            }
            
            if(getTop('s2')< bannerHeight-200){
                getDom('s2-h3').classList.add('cone1');
                getDom('s2-h4').classList.add('cone1');
                getDom('solu-row1').classList.add('solution-row');
                getDom('solu-row2').classList.add('solution-row');
                getDom('solu-row3').classList.add('solution-row');
                getDom('solu-row4').classList.add('solution-row');
                getDom('solu-row5').classList.add('solution-row');
            }
            if(getTop('s3')< bannerHeight-200){
                getDom('s3-h3').classList.add('eone1');
                getDom('s3-h4').classList.add('eone1');
                getDom('eow1').classList.add('eone2');
                getDom('eow2').classList.add('eone3');
                getDom('eow3').classList.add('eone4');
                getDom('eow4').classList.add('eone5');
                getDom('eow5').classList.add('eone6');
                getDom('eow6').classList.add('eone7');
            }
            if(getTop('s4')< bannerHeight-200){
                getDom('s4-h3').classList.add('eone1');
            }
            if(getTop('s5')< bannerHeight-200){
                getDom('s5-h3').classList.add('eone1');
                getDom('news1').classList.add('news-row');
                getDom('news2').classList.add('news-row');
                getDom('news3').classList.add('news-row');
                getDom('news4').classList.add('news-row');
                getDom('news5').classList.add('news-row');
                getDom('news6').classList.add('news-row');

            }
           
        })