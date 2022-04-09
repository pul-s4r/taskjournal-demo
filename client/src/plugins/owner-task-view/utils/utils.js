const formatDate = (rawDate) => {
  try {
    // const _date = new Date(rawDate.toNumber());
    const _date = new Date(rawDate * 1000);
    // console.log("Date: ", _date);
    const date = `${_date.getDate() + 1}/${_date.getMonth() + 1}/${_date.getFullYear()}`;
    const time = `${_date.getHours()}:${_date.getMinutes()}`;
    return `${date} - ${time}`;
  } catch (error) {
    // console.log("Error formatting date: ", error);
    return `${rawDate}`;
  }
};

const formatDateString = (dateStr) => {
  try {
    const _date = new Date(dateStr);
    const date = `${_date.getDate() + 1}/${_date.getMonth() + 1}/${_date.getFullYear()}`;
    const time = `${_date.getHours()}:${_date.getMinutes()}`;
    return `${date} - ${time}`;
  } catch (error) {
    return `${dateStr}`;
  }
};

export { formatDate, formatDateString };
