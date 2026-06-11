$(function () {

    $("img#sword_img2").mouseover(function () {
        $("img#sword_img2").attr("src", "images/sword1.jpg");
        $("p#sword_caption").text("The making process : assembling the blocks");
    });

    $("img#sword_img2").mouseout(function () {
        $("img#sword_img2").attr("src", "images/sword2.jpg");
        $("p#sword_caption").text("Hover over the images to see how it was made");
    });

    $("img#sword_img3").mouseover(function () {
        $("img#sword_img3").attr("src", "images/sword4.jpg");
        $("p#sword_caption").text("The blue resin being mixed before pouring into the blocks");
    });

    $("img#sword_img3").mouseout(function () {
        $("img#sword_img3").attr("src", "images/sword3.jpg");
        $("p#sword_caption").text("Hover over the images to see how it was made");
    });

    $("img#clay_img1").mouseover(function () {
        $("p#clay_caption").text("This is Eren and Mikasa from Attack on Titan");
    });

    $("img#clay_img1").mouseout(function () {
        $("p#clay_caption").text("Hover over the figures to learn who they are");
    });

    $("img#clay_img2").mouseover(function () {
        $("p#clay_caption").text("This is Amu Hinamori from Shugo Chara");
    });

    $("img#clay_img2").mouseout(function () {
        $("p#clay_caption").text("Hover over the figures to learn who they are");
    });


    $("img.food_img").click(function () {
        var desc = $(this).siblings("p.food_desc");
        $("p.food_desc").not(desc).hide();

        $(this).css("position", "relative");
        $(this).animate({ left: "10px" }, 100);
        $(this).animate({ left: "-10px" }, 100);
        $(this).animate({ left: "10px" }, 100);
        $(this).animate({ left: "0px" }, 100);

        desc.show();
    });

});