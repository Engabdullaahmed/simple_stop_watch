let sec = 0;
let min = 0;
let hours = 0;
//? control the stop and work watch 
let interval;
let runing = false;

const start_stop = document.querySelector('#startstopBtn');
const resetBtn = document.querySelector('#resetBtn');
const startStopImage = document.querySelector('#image_');

// function to start stop 

start_stop.addEventListener('click', function() {
    // هنا بقى ممكن نسال ليه برنامج شغال علطول منغير اى لووب 
    // فكره هنا لووب تم خلقها ولكن طول م انت مدستش عل زرار ال بدايه هتفضل لووب شغاله لو دست هندخل عل شرط تانى و هو 
    //   stop لووب تقف و بالتلى بعمل   
  if (!runing) {
    runing = true;
    // search about setinterval method 
    interval = setInterval(function() {
      sec++;
      startStopImage.src = 'last.png';
      if (sec == 60) {
        sec = 0;
        min++;
        
        if (min == 60) {
          min = 0;
          hours++;
        }
      }

      // updated time 
      document.querySelector('h1').textContent = 
        `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }, 1000); // 1000 ms = 1 second
  } else {
    runing = false;
    clearInterval(interval);
    startStopImage.src = 'play-buttton.png';


// padStart(2, '0'): Pads the string with '0' until it reaches a length of 2 characters. For example, if hours is 5, hours.toString().padStart(2, '0') will result in "05"  but if we do sec.tostring() will count 1 2 3 not 01 02 03 

  }
});

// method to reset the stopwatch
resetBtn.addEventListener('click', function() {
  clearInterval(interval); 
  runing = false;
  sec = 0;
  min = 0;
  hours = 0;

  document.querySelector('h1').textContent = '00:00:00';
});
