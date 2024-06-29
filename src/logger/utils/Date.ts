const LogDate = () => {
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let seconds: number | string = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Pad minutes with leading zero if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the appropriate suffix for the day
  const daySuffix = (day: number) => {
    if (day > 3 && day < 21) return "th"; // Handles 11th to 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format the date string
  return {
    full: `${hours}:${minutes}:${seconds}${ampm} - ${day}${daySuffix(day)} ${
      monthNames[monthIndex]
    } ${year}`,
    date: `${day}${daySuffix(day)} ${monthNames[monthIndex]} ${year}`,
    time: `${hours}:${minutes}:${seconds}${ampm}`,
    year,
    month: monthNames[monthIndex],
  };
};

export default LogDate;
