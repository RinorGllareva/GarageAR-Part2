function removeElement() {
    var show = document.getElementById("visible");
    if (show.style.display === "none") {
      show.style.display = "block";
    }else{
      show.style.display = "none";
    }
  
    var pv = document.getElementById("PV");
    if(pv.style.height == '1260px'){
    pv.style.height = '2800px';
    }else{
    pv.style.height = '1260px'
    }
        
    var c2 = document.getElementById("C2");
    if(c2.style.height == '800px'){
        c2.style.height = '2400px';
    }else{
        c2.style.height = '800px'
    }
  }
  var i = 0;
                  var images = [];
                  var time = 2000;
  
                  //Images List
                  images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-101-1613767179.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-102-1613767185.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-104-1613767183.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-106-1613767205.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-109-1613767222.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-110-1613767178.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-111-1613767233.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-112-1613767242.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-113-1613767255.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-114-1613767286.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-115-1613767262.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-116-1613767273.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-117-1613767280.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-118-1613767289.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-119-1613767279.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-120-1613767322.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-121-1613767307.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-122-1613767326.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-123-1613767324.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-124-1613767338.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-125-1613767316.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-126-1613767328.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-127-1613767336.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-128-1613767348.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-129-1613767389.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-130-1613767362.jpg?crop=1xw:1xh;center,top&resize=980:*';
                  images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-131-1613767369.jpg?crop=1xw:1xh;center,top&resize=980:*';
                                
  
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