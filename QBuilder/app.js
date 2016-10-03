
chrome.tabs.getSelected(null, function(tab) {
    window.turl=tab.url;
    window.title = 'Qualify ' + tab.url;
    localStorage["favorite_server"] = localStorage["favorite_server"] ? localStorage["favorite_server"] :  'http://localhost';
    localStorage["favorite_port"] = localStorage["favorite_port"] ? localStorage["favorite_port"] :  '';

    if (localStorage["favorite_server"] == 'http://localhost' && localStorage["favorite_port"]== ''){
        localStorage["favorite_port"] = '8080';
    }


    document.getElementById('surl').innerHTML = localStorage["favorite_server"];
    document.getElementById('sport').innerHTML = localStorage["favorite_port"] ? ':' + localStorage["favorite_port"]  : '' ;

    favorite_server =  localStorage["favorite_server"];
    favorite_port =  localStorage["favorite_port"];

    url = favorite_port.length? favorite_server  + ':' + favorite_port : favorite_server;
    frameurl  =url.concat('/qbuilder.html#').concat(turl);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + '/dmp/login/me', true);
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4) {



            if(xhr.status == 401){
                frameurl = url.concat('/qbuilderlogin.html?#').concat(turl);
            }



  //          if (!localStorage["savedElement"]){


             //    alert('NO savedElement');
                frame = document.createElement('iframe');
                frame.setAttribute('src', frameurl);
                frame.setAttribute('id', 'qbuilderiframe');
                frame.setAttribute('seamless', 'seamless');
                frame.setAttribute('width', 550);
                frame.setAttribute('height', 300);

                document.getElementById('frame').appendChild(frame);
                document.getElementById('ourl').href= 'options.html';
                document.getElementById('tool').href= url.concat('#tool/index');
                document.getElementById('loading').innerHTML= '';


             //   var savedElement = document.getElementById('frame');


//                setTimeout(function(){
//                    localStorage["savedElement"] = document.getElementById('frame');
//                } , 10000)


//            }else{
//                alert('YES savedElement');
//                document.getElementById('frame').appendChild(localStorage["savedElement"]);
//            }







        }
    };
    xhr.send();




} );

