
const hamburgerButton = document.getElementById('menu-trigger');
const closeButton = document.getElementById('menu-close');

hamburgerButton.addEventListener('click', showSideMenu);
closeButton.addEventListener('click', showSideMenu);

const sideMenu = document.getElementById('side-menu');

function showSideMenu(){
    sideMenu.classList.toggle('show-menu')
}

const sideButton = document.getElementById('side-trigger');

sideButton.addEventListener('click', showSideMenu);


//

const gif = document.getElementById('gif');
const stopButton = document.getElementById('stopButton');
const runButton = document.getElementById('playButton');
const pausedImage = document.getElementById('pausedImage')

stopButton.addEventListener('click', function() {
    gif.style.display = 'none'; 
    pausedImage.style.display = 'block';
});

runButton.addEventListener('click', function() {
    gif.style.display = 'block'; 
    pausedImage.style.display = 'none';
});



//// Image files and references ////
/*
1- Akira Toriyama photo
https://www.bing.com/images/search?view=detailV2&ccid=WIdSFBth&id=9D4AEAF3C21B9230F7D63B30077E476CB05A2C66&thid=OIP.WIdSFBthLjAyQWWb6axqcQHaKb&mediaurl=https%3A%2F%2Fassets.mycast.io%2Fposters%2Fakira-toriyama-biopic-fan-casting-poster-117936-large.jpg%3F1627223220&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.588752141b612e303241659be9ac6a71%3Frik%3DZixasGxHfgcwOw%26pid%3DImgRaw%26r%3D0&exph=828&expw=588&q=akira+toriyama&simid=608034127069991852&form=IRPRST&ck=1BBD6600EA6DE037A52D6ED78330187E&selectedindex=0&itb=0&ajaxhist=0&ajaxserp=0&vt=0&pivotparams=insightsToken%3Dccid_gqxYDLhI*cp_EBB2E126E09C0A880F876D5E868327E9*mid_6AA6279A475D194A19B9394CDD563848F6A451CD*simid_608015834790321454*thid_OIP.gqxYDLhIGYE9vdvgQRcjzAAAAA&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

2- Dragon Ball
https://www.bing.com/images/search?view=detailV2&ccid=qyx2k5ZI&id=54F2662616043BA4048408F38C41ED41716F6AC8&thid=OIP.qyx2k5ZI72B55zsws37jSwHaHa&mediaurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F6796fe47-907a-4f6f-8075-8722ea4708d1%2Fddpvgse-30622ade-c990-4351-a216-47beb771d52b.png%2Fv1%2Ffill%2Fw_894%2Ch_894%2F4_star_dragon_ball_by_thepi7on_ddpvgse-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwMCIsInBhdGgiOiJcL2ZcLzY3OTZmZTQ3LTkwN2EtNGY2Zi04MDc1LTg3MjJlYTQ3MDhkMVwvZGRwdmdzZS0zMDYyMmFkZS1jOTkwLTQzNTEtYTIxNi00N2JlYjc3MWQ1MmIucG5nIiwid2lkdGgiOiI8PTMwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NdnJ49kwCOaJkM0CGykUp2n2WtXYzcBxJxDxk0oE1WU&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.ab2c76939648ef6079e73b30b37ee34b%3Frik%3DyGpvcUHtQYzzCA%26pid%3DImgRaw%26r%3D0&exph=894&expw=894&q=4+star+dragon+ball+logo&simid=608053024927529848&form=IRPRST&ck=17D0E39994E381871784CCBE87F4E911&selectedindex=6&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_glqXhVDX*cp_8A0610A0F5EED7DE7481D1D3464F7B91*mid_58AD78E7323CFF4471C73FF96868250E0FB6E956*simid_607986397110018385*thid_OIP.glqXhVDXc1YRq4073mdwBAAAAA&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

3- dragon ball radar
https://www.bing.com/images/search?view=detailV2&ccid=GOpBMhQ3&id=949DFCB8D70DE07E20CD0556B8FD264707415270&thid=OIP.GOpBMhQ3anHzwP0yQweM_QHaFZ&mediaurl=https%3A%2F%2Fd3fa68hw0m2vcc.cloudfront.net%2F806%2F223089701.jpeg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.18ea413214376a71f3c0fd3243078cfd%3Frik%3DcFJBB0cm%252fbhWBQ%26pid%3DImgRaw%26r%3D0&exph=458&expw=628&q=DBZ+Radar&simid=607996069324851837&form=IRPRST&ck=4893381BAD64A1EFD3E6EC6D08532ADD&selectedindex=0&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_2OquZohB*cp_35C4780E9CCA482B304EEC25C41AA1F9*mid_E8565B60838801061423962D4EDF7EAB48CAE21E*simid_607999432313236892*thid_OIP.2OquZohBDBAVwQGWl2eObQHaFZ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

4- vegeta opening
https://www.google.com/imgres?imgurl=https://media.tenor.com/21VtlkxRGLwAAAAe/vegeta-nappa.png&tbnid=JyOb7lqLyqot7M&vet=1&imgrefurl=https://tenor.com/view/vegeta-nappa-dragon-ball-z-chala-head-chala-dragonball-gif-15804658959619528892&docid=_RgqUKLmK2hfxM&w=480&h=270&source=sh/x/im/m1/1&kgs=25ec39aa03561284&shem=abme,trie

5- DBZ wallpaper
https://www.bing.com/images/search?view=detailV2&ccid=BPIlKMiL&id=15E568DF90145A28246254F5F801D670633AF0B4&thid=OIP.BPIlKMiLN0pVGv28JUD8kwHaEc&mediaurl=https%3A%2F%2Fassetsio.reedpopcdn.com%2FDragon-Ball-Z-Cast_fmjb7SC.jpg%3Fwidth%3D1920%26height%3D1920%26fit%3Dbounds%26quality%3D80%26format%3Djpg%26auto%3Dwebp&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.04f22528c88b374a551afdbc2540fc93%3Frik%3DtPA6Y3DWAfj1VA%26pid%3DImgRaw%26r%3D0&exph=1152&expw=1920&q=dragon+ball+z+opening&simid=608024433354949530&form=IRPRST&ck=0630EEB2CA5EC69F7E31262F8BA5F3D6&selectedindex=0&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_jeHD7Q8C*cp_FE346492E594459CE328527EE0173755*mid_B171BE31052E6D660E7706B1A2D60E04E5066A51*simid_607989588301061190*thid_OIP.jeHD7Q8C31g-Y-0qupcWkQAAAA&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

6- Kamehameha
https://www.bing.com/images/search?view=detailV2&ccid=shbns2Mx&id=22A91ADDA55C6223925D7912A774183A43D7A293&thid=OIP.shbns2MxpWhsUbzfHuWsFwHaEo&mediaurl=https%3a%2f%2fimg.wallpapersafari.com%2fdesktop%2f1440%2f900%2f78%2f48%2fX9jlCH.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b216e7b36331a5686c51bcdf1ee5ac17%3frik%3dk6LXQzoYdKcSeQ%26pid%3dImgRaw%26r%3d0&exph=900&expw=1440&q=Dragon+Ball+Z+Family+Kamehameha&simid=608041832234680598&FORM=IRPRST&ck=362D671CAA8088CBA59757A133E35BF1&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0

7- Goku and Gohan
https://www.bing.com/images/search?view=detailV2&ccid=wQ%2fjQUca&id=99631D9EF3B2C59B3770767114F4FBFDB3E35851&thid=OIP.wQ_jQUca_w2B0-BhKg_x1AAAAA&mediaurl=https%3a%2f%2fvignette1.wikia.nocookie.net%2fall-anime-characters%2fimages%2fb%2fba%2fNimbus.jpg%2frevision%2flatest%3fcb%3d20150107132251&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c10fe341471aff0d81d3e0612a0ff1d4%3frik%3dUVjjs%252f379BRxdg%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d635&exph=302&expw=240&q=goku+gohan+nimbus&simid=608050997698523703&FORM=IRPRST&ck=97B2432A6F1A1E2EF15B2A47E4449705&selectedIndex=7&itb=0&ajaxhist=0&ajaxserp=0

8- Chrono trigger wallpaper
https://www.bing.com/images/search?view=detailV2&ccid=2EmgLG5q&id=37FA7825B883783F977452BB33EE672AC864D339&thid=OIP.2EmgLG5qg1z2_3i_vgOtWgHaEK&mediaurl=https%3a%2f%2fwallpapertag.com%2fwallpaper%2ffull%2fc%2fa%2fd%2f98010-top-chrono-trigger-wallpaper-1920x1080.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d849a02c6e6a835cf6ff78bfbe03ad5a%3frik%3dOdNkyCpn7jO7Ug%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=chrono+trigger+wallpapaer&simid=608005402329906839&FORM=IRPRST&ck=171B0D0BD8D27DDDD4A9438226956F21&selectedIndex=9&itb=0&ajaxhist=0&ajaxserp=0

9- Chrono trigger running pause
https://www.bing.com/images/search?view=detailV2&ccid=0k%2b7c53T&id=5A3A956EFB7D51419CE3A3E9BF2C9AA59147E80F&thid=OIP.0k-7c53ToAdtCvu70Agj0QAAAA&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2f73%2f15%2f58%2f73155884d140312bf4a4ef70c79fb3c3.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d24fbb739dd3a0076d0afbbbd00823d1%3frik%3dD%252bhHkaWaLL%252fpow%26pid%3dImgRaw%26r%3d0&exph=210&expw=372&q=chrono+trigger+running+pixel&simid=608023900761831590&FORM=IRPRST&ck=42284ED7EFEF5BB372967B3F1404B22B&selectedIndex=27&itb=0&ajaxhist=0&ajaxserp=0

10- Chrono trigger running gif
https://www.bing.com/images/search?view=detailV2&ccid=H3ry%2boqo&id=5A3A956EFB7D51419CE3E646B5B710FB30312AF5&thid=OIP.H3ry-oqop1I1LIwUziTyzgAAAA&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f73%2f15%2f58%2f73155884d140312bf4a4ef70c79fb3c3.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1f7af2fa8aa8a752352c8c14ce24f2ce%3frik%3d9SoxMPsQt7VG5g%26pid%3dImgRaw%26r%3d0&exph=212&expw=467&q=chrono+trigger+running+pixel&simid=608053097926567528&FORM=IRPRST&ck=21D14F661BD46BDDA08BA58E28F869F1&selectedIndex=46&itb=0&ajaxhist=0&ajaxserp=0

11- Frog
https://www.bing.com/images/search?view=detailV2&ccid=Z88MRRFb&id=9FAB6AC73561B0D6C3B3B76D65B25B09AB629337&thid=OIP.Z88MRRFbt2TC4hW9VYPLsgHaFj&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fHaORxRu-UB0%2fhqdefault.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.67cf0c45115bb764c2e215bd5583cbb2%3frik%3dN5NiqwlbsmVttw%26pid%3dImgRaw%26r%3d0&exph=360&expw=480&q=chrono+trigger+frog+victory+snes+pixel&simid=607995854602660357&FORM=IRPRST&ck=2A903C988388526E214063F4A0C60854&selectedIndex=26&itb=0&ajaxhist=0&ajaxserp=0

12- Dragon quest wallpaper
https://www.bing.com/images/search?view=detailV2&ccid=juiyTfKY&id=3DBD51BA0822FEC53984FFA2A10FD70E85CCB0A7&thid=OIP.juiyTfKY4LPR7VH6-QpO-gHaEI&mediaurl=https%3A%2F%2Fosakaitjournal.com%2Fwp-content%2Fuploads%2F2023%2F03%2FDragonQuest.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8ee8b24df298e0b3d1ed51faf90a4efa%3Frik%3Dp7DMhQ7XD6Gi%252fw%26pid%3DImgRaw%26r%3D0&exph=271&expw=486&q=dragon+quest+heroes&form=IRPRST&ck=B37AB979678C73618AD684FD5BC483F9&selectedindex=1&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_a0eod498*cp_8E356DE73DAE1A46CDEA92C361F9C559*mid_5540F86DEECB1990B3FE090B9D4F364481D1E9F9*simid_608007219077386897*thid_OIP.a0eod498TEhtrR8XPqD!_GQHaHI&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0

13- Slime
https://www.bing.com/images/search?view=detailV2&ccid=ZkoPh0qC&id=A0982B44A64F84E142318402CB3269FF7538837C&thid=OIP.ZkoPh0qCT6BLt17EzvRguwHaHP&mediaurl=https%3a%2f%2fstatic.wikia.nocookie.net%2fdragonquest%2fimages%2f6%2f69%2fDQVIII_-_Slime.png%2frevision%2flatest%3fcb%3d20151121125212&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.664a0f874a824fa04bb75ec4cef460bb%3frik%3dfIM4df9pMssChA%26pid%3dImgRaw%26r%3d0&exph=527&expw=539&q=dragon+quest+slime&simid=607988312671873851&FORM=IRPRST&ck=612250A8EE8E3513F54D83B9AEE9354A&selectedIndex=43&itb=1&ajaxhist=0&ajaxserp=0

14- Sabrecat
https://www.bing.com/images/search?view=detailV2&ccid=qiPlsKWg&id=F3912025A2EAC4FF573E92322B35ECE12FBD4C06&thid=OIP.qiPlsKWgXtZqiPxYc35VZAAAAA&mediaurl=https%3a%2f%2fdragon-quest.org%2fimages%2fthumb%2fe%2fec%2fDQT_Great_Sabrecat.png%2f275px-DQT_Great_Sabrecat.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.aa23e5b0a5a05ed66a88fc58737e5564%3frik%3dBky9L%252bHsNSsykg%26pid%3dImgRaw%26r%3d0&exph=263&expw=275&q=dragon+quest+sabercat&simid=608018141180205107&FORM=IRPRST&ck=7ED4F14435846A73AAA91531825F9E8C&selectedIndex=0&itb=1&ajaxhist=0&ajaxserp=0

15- Rain gif
https://www.bing.com/images/search?view=detailV2&ccid=bVgASbY%2b&id=E3EB8637BF168D27FE6BA186B53ABCCF3ADD373F&thid=OIP.bVgASbY-CoX6nyLxVWz7BQHaEb&mediaurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f6d580049b63e0a85fa9f22f1556cfb05%2ftenor.gif%3fitemid%3d5419908&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6d580049b63e0a85fa9f22f1556cfb05%3frik%3dPzfdOs%252b8OrWGoQ%26pid%3dImgRaw%26r%3d0&exph=298&expw=498&q=vegeta+rain+gif&simid=608019275082333566&FORM=IRPRST&ck=F0E4EDAD705711A0BF7E3B31A2B38F46&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0

16- Arale gif
https://www.bing.com/images/search?view=detailV2&ccid=r56GZ94%2b&id=967EB071F2B7331520092F21A067546722B95C67&thid=OIP.r56GZ94-AH3y1TnloKbtsAHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f49%2f1a%2ffe%2f491afe8977051b1047e33e3b7ca184e4.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.af9e8667de3e007df2d539e5a0a6edb0%3frik%3dZ1y5ImdUZ6AhLw%26pid%3dImgRaw%26r%3d0&exph=480&expw=480&q=arale+gif&simid=607998916910144524&FORM=IRPRST&ck=B6BCF0520C9E55F3BC2618B3AD3E9748&selectedIndex=34&itb=0&ajaxhist=0&ajaxserp=0

*/

