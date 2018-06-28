let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Used to parse the date given in the URL
let parseDate = (date) => {

  // Return the current date
  if (!date) {
    return {
      unix: new Date().getTime(),
      utc: Date()
    };
  }

  let newDate;

  /* RegEx to check whether the date has letters or hyphens else it is parsed into an int (for unix)*/
  if ((parseInt(date) === new Date(parseInt(date)).getTime()) && !/[a-zA-Z-]/.test(date)) {
    newDate = new Date(parseInt(date));
  } else {
    newDate = new Date(date);
  }

  // create the variables used to create a read out of the date and unix
  let unix = newDate.getTime();
  let day = days[newDate.getUTCDay()];
  let month = months[newDate.getMonth()];
  let year = newDate.getFullYear();
  let number = newDate.getDate();

  // If date is a unix integer provide the detailed time else set the time to 00:00:00 GMT
  if (date >= 0) {
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
    return {
      unix: unix,
      utc: `${day}, ${month} ${number}, ${year} ${hour}:${minute}:${second} GMT`
    };
  } else {
    return {
      unix: unix,
      utc: `${day}, ${month} ${number}, ${year} 00:00:00 GMT`
    };
  }
};

module.exports = {
  parseDate
};
