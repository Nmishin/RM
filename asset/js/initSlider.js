jQuery(document).ready(function(){
    var jsFolder = "http://amazingslider.com/wp-content/uploads/amazingslider/8/sliderengine/";
    jQuery("#amazingSlider").amazingslider({
        jsfolder:jsFolder,
        width:990,
        height:300,
        watermarkstyle:"text",
        loadimageondemand:false,
        watermarktext:"http://amazingslider.com",
        isresponsive:true,
        autoplayvideo:false,
        watermarkimage:"",
        pauseonmouseover:false,
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        randomplay:false,
        showwatermark:false,
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        slideinterval:8000,
        watermarktarget:"_blank",
        watermarkpositioncss:"display:block;position:absolute;top:4px;left:4px;",
        watermarklink:"http://amazingslider.com",
        transitiononfirstslide:false,
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
        skin:"Classic",
        textautohide:true,
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navbuttonradius:2,
        navpreviewposition:"top",
        navpreviewarrowheight:8,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navpreviewwidth:120,
        googlefonts:"Inder",
        textpositionmarginright:24,
        navcolor:"#333333",
        arrowwidth:32,
        navmargin:16,
        texteffecteasing:"easeOutCubic",
        texteffect:"fade,slide",
        navspacing:4,
        navarrowimage:"navarrows-20-20-1.png",
        navwidth:20,
        navheight:20,
        timeropacity:0.6,
        descriptioncss:"display:block; position:relative; margin-top:4px; font:14px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
        navpreviewbordercolor:"#ffffff",
        arrowstyle:"none",
        textpositionmargintop:24,
        navswitchonmouseover:false,
        playvideoimage:"playvideo-64-64-0.png",
        arrowimage:"arrows-32-32-0.png",
        textstyle:"static",
        playvideoimageheight:64,
        navfonthighlightcolor:"#ffffff",
        showbackgroundimage:false,
        navpreviewborder:4,
        shadowcolor:"#aaaaaa",
        navbuttonshowbgimage:false,
        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",
        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#333333; opacity:0.6; filter:alpha(opacity=60);",
        navpreviewarrowwidth:16,
        playvideoimagewidth:64,
        bottomshadowimagewidth:110,
        showtimer:true,
        navshowpreview:false,
        navradius:2,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        navfeaturedarrowimageheight:8,
        navstyle:"numbering",
        textpositionmarginleft:24,
        navplaypauseimage:"navplaypause-20-20-1.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        navfontsize:12,
        navhighlightcolor:"#ff4629",
        navimage:"bullet-24-24-0.png",
        navbuttoncolor:"#333333",
        navshowarrow:true,
        textcss:"display:block; padding:12px; text-align:left;",
        titlecss:"display:block; position:relative; font: 16px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
        navshowbuttons:true,
        arrowhideonmouseleave:1000,
        navopacity:0.8,
        backgroundimagewidth:120,
        bordercolor:"#840000",
        arrowheight:32,
        arrowmargin:8,
        texteffectduration:1000,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        border:5,
        timerposition:"bottom",
        navfontcolor:"#ffffff",
        bottomshadowimagetop:95,
        borderradius:0,
        navbuttonhighlightcolor:"#ff4629",
        textpositionstatic:"bottom",
        navshowfeaturedarrow:false,
        navbordercolor:"#ffffff",
        navpreviewarrowimage:"previewarrow-16-8-0.png",
        showbottomshadow:true,
        backgroundimage:"",
        navposition:"topright",
        navborder:4,
        textpositiondynamic:"bottomleft",
        shadowsize:5,
        textpositionmarginbottom:24,
        shuffle: {
            duration:1000,
            easing:"easeOutCubic",
            columncount:5,
            checked:true,
            rowcount:5
        },
        transition:"blinds" // shuffle
    });

    $('div.amazingslider-watermark-0').remove();
    // $('.amazingslider-slider-0').css('display', 'none');
    // setTimeout(function() { $('.amazingslider-slider-0').slideDown(2000); }, 000);
});