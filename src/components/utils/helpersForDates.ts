function convertUTCTo12Hour(utcTime: string) {
  // Create a Date object from the UTC time string
  const date = new Date(utcTime);

  // Get hours and minutes
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Determine AM or PM
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Format hours and minutes with leading zeros if needed
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  // Create the 12-hour time string
  const twelveHourTime = `${formattedHours}:${formattedMinutes} ${amPm}`;

  return twelveHourTime;
}

function formatCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const formattedDate = `${currentMonth}, ${currentYear}`;

  return formattedDate;
}

function showDynamicDate(UTCtime: string) {
  const inputedDate = new Date(UTCtime).getTime();
  const currentDate = new Date().getTime();
  const aDayAgo = 24 * 3600 * 1000;
  if (inputedDate > currentDate - aDayAgo) {
    return convertUTCTo12Hour(UTCtime);
  } else {
    return new Date(UTCtime).toDateString().slice(4, 10);
  }
}

export { convertUTCTo12Hour, formatCurrentDate, showDynamicDate };
