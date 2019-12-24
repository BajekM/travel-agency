export const formatTime = (seconds) => {
  if (!seconds) {
    return null;
  }else if (isNaN(seconds)) {
    return null;
  }else if (seconds < 0 ) {
    return null;
  } else {

    const zeroPadded = function zeroPadding(number, length) {
      return (Array(length).join('0') + number).slice(-length);
    };

    let secs = Math.floor(seconds % 60);
    secs < 10 ? secs = zeroPadded(secs, 2) : '';
    let mins = Math.floor((seconds/60) % 60);
    mins < 10 ? mins = zeroPadded(mins, 2) : '';
    let hours = Math.floor(seconds/3600);
    hours < 10 ? hours = zeroPadded(hours, 2) : '';

    return (hours + ':' + mins + ':' + secs);
  }
};
