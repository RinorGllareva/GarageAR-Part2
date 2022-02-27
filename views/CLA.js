function removeElement() {
    var show = document.getElementById("visible");
    if (show.style.display === "none") {
      show.style.display = "block";
    }else{
      show.style.display = "none";
    }
  
    var pv = document.getElementById("PV");
    if(pv.style.height == '1260px'){
    pv.style.height = '2100px';
    }else{
    pv.style.height = '1260px'
    }
    
    var c2 = document.getElementById("C2");
    if(c2.style.height == '800px'){
        c2.style.height = '1700px';
    }else{
        c2.style.height = '800px'
    }
}
var i = 0;
var images = [];
var time = 2000;
//Images List
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-247-1599226731.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-303-1599226733.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-111-1599226733.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-134-1599226731.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-441-1599226734.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-236-1599226733.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-373-1599226731.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-323-1599226731.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-472-1599226731.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-376-1599226731.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-497-hdr-1599226734.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-509-hdr-1599226736.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-572-hdr-1599226737.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-581-hdr-1599226737.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-626-hdr-1599226740.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-638-hdr-1599226740.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-728-hdr-1599226747.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-743-hdr-1599226748.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-671-hdr-1599226743.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-668-hdr-1599226743.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-659-hdr-1599226742.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-707-hdr-1599226746.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-698-hdr-1599226746.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-737-hdr-1599226748.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-713-hdr-1599226746.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-716-hdr-1599226748.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-712-hdr-1599226746.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[27] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-644-hdr-1599226742.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[28] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-599-hdr-1599226739.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[29] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-608-hdr-1599226739.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-590-hdr-1599226739.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[31] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-515-hdr-1599226736.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[32] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-520-hdr-1599226736.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[33] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-amg-cla45-527-hdr-1599226736.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';

//Change Images
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()",time);
}

window.onload= changeImg;