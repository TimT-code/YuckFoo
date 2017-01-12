/*To see this in action - Check out these code pens
http://codepen.io/TimT_code/pen/wWNdRy - Mixed Martial Arts themed demo code
http://codepen.io/TimT_code/pen/KzoKmy - LinkLore - Add to a list and get popup video etc
*/

var vid=[];//dvt=delay_visible_time, evt=end_visible_time - pass in a 2nd argument of 'v0' for 'no-video' for audio only zindex hiding iframe
//I would like to also write no-video into the array/object parameters instead of currently only being able to pass it thru arguments[]
//vid[#]={vid_info:'', dvt:0, evt:0};//template for info

//sample list is MMA themed
vid[0]={vid_info:'pddLUjCO7HI?start=117&end=117', dvt:1600, evt:3585};//Kimbo
vid[1]={vid_info:'jChtC6kNLXI?start=18&end=25', dvt:0, evt:6200};//Conor
vid[2]={vid_info:'LHgx52KBY6s?start=1140&end=1145', dvt:1600, evt:6242};//Lesnar
vid[3]={vid_info:'DVOIxvaaOSw?start=03&end=12', dvt:900, evt:9000};//Overeem
vid[9]={vid_info:'S3ubnS4RQVg?start=03&end=31', dvt:4400, evt:29700};//Sonnen

vid[20]={vid_info:'GoCOg8ZzUfg?start=11&end=218',dvt:1000,evt:180000};//theme-can't be touched
vid[21]={vid_info:'3eUpf4f8LEU?start=06&end=199',dvt:1000,evt:180000};//theme-face the pain-ufc
vid[22]={vid_info:'QT5OLGYA9a4?start=06&end=264',dvt:1000,evt:264000};//theme-fedor- Enae Volare Mezzo - eRa
vid[23]={vid_info:'u94qXjChoqY?start=06&end=245',dvt:1000,evt:245000};//theme - requiem for a dream - lotr

vid[24]={vid_info:'34Na4j8AVgA?start=06&end=245',dvt:50000,evt:245000};//theme - The Weeknd - Starboy


function vidz(vid_number){
      var first_part='https://www.youtube.com/embed/';
      /*
      autoplay=on
      showinfo=off
      controls=off
      autohide=on
      disablekb=on
      fs=off(full screen)
      */
      var end_part='&autoplay=1&showinfo=0&controls=0&autohide=1&disablekb=1&fs=0';  
      whole_url = first_part + vid[vid_number].vid_info + end_part;
      return vid_number;
      //console.log(whole_url);
}


// Vid - Launcher Youtube - "lyt"=LaunchYouTube
function lyt(vid_number) { //reusable for all - just pass in array index of lyt(vidz(4),'v0'), a 2nd argument 'v0' single quoted
  document.getElementById('response_iframe_id').style='z-index:2;width:500px;height:300px';//resets iframe css incase it was altered when 'v0' was passed - no-video
  if(arguments[1]==='v0'){//check if there is a 2nd argument passed--if it is 'v0' 'video 0/video off/sound on' then do something..
    document.getElementById('response_iframe_id').style='z-index:-4;position:absolute;top:250px;left:125px;width:0;height:0';//hide visible part of video clip
  }
  
  document.getElementById('response_iframe_id').src = whole_url;
  setTimeout(action_after_delay_timer1, vid[vid_number].dvt); //delay before displaying iframe to not show vid load-also set back start vid time in youtube url to not miss anything
  function action_after_delay_timer1() {
    document.getElementById('response_iframe_id').style.display = 'inline';
    //document.getElementById('response_iframe_id').style.zIndex = '2';
  }
  setTimeout(timerGo_vid, vid[vid_number].evt); //vid close.. display off timer -- looks for timer value passed into function

  function timerGo_vid() {
    document.getElementById('response_iframe_id').src = ''; //makes iframe suddenly have no src turning to black background css
    document.getElementById('response_iframe_id').style.display = 'none'; //makes iframe disappear abruptly
  }
}



window.onload=function(){
  lyt(vidz(23),'v0');
};
