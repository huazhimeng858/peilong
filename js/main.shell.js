/**
 * Created by Administrator on 2016/4/26.
 */
pel.shell = (function () {
    var
        configMap = {
            main_html : String()
            +'<div class="poll-number">'+'<span class="reduce"</span>'+'<input type="text" class="poll-number-text" value="3">'+'<span class="add"</span>'+'</div>'
        },
        stateMap  = {
            $container: null
        },
        jqueryMap = {}, setJqueryMap,onReduce,onAdd,onClick,
        onScoll,initModule;
    setJqueryMap = function () {
        var $container = stateMap.$container;

        jqueryMap = {
            $container : $container,
            $reduce:$('.poll-number-text').val(),
            $number:$('.li1-remaining').text(),
            $scoll:$('.li1-scroll'),
            $li1_scoll:$('item-info-li1')
        };
    };
    onReduce=function(){
        if(jqueryMap.$number!=0&&jqueryMap.$reduce!=0){
            jqueryMap.$reduce-=1;
            $('.poll-number-text').val(jqueryMap.$reduce);

        }
        if(jqueryMap.$reduce==0&&jqueryMap.$number!=0){
            $('.poll-number-text').val(0);
        }
    };
    onAdd=function(){
       if(jqueryMap.$reduce!=jqueryMap.$number){
           jqueryMap.$reduce+=1;
           $('.poll-number-text').val(jqueryMap.$reduce);
       }
        if(jqueryMap.$reduce==jqueryMap.$number){
            $('.poll-number-text').val(jqueryMap.$number);
        }
    };
    onScollIn=function(){
        setTimeout(function(){
            jqueryMap.$scoll.css('display','block');
        },1000);

    };
    onScollOut=function(){
        setTimeout(function(){
            jqueryMap.$scoll.css('display','none');
        },1000);
    };
    initModule = function ( $container ) {
        stateMap.$container=$container;
        $container.html(configMap.main_html);
        setJqueryMap();
        $('.reduce').on('click',onReduce);
        $('.add').on('click',onAdd);
        $('.item-info-li1').on('mouseover',onScollIn).on('mouseout',onScollOut);
    };
    return { initModule : initModule };
}());