$(function () {
    html2canvas($("body"), {
        onrendered: function (canvas) {
            $(".blurdiv").append(canvas);
            $("canvas").attr("id", "canvas");
            stackBlurCanvasRGB(
                'canvas',
            0,
            0,
            $("canvas").width(),
            $("canvas").height(),
            170);
        }
    });
    vv = setTimeout(function () {
        $("header").show();
        clearTimeout(vv);
    }, 200);
});