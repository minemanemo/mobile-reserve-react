export const getDateTimeString = (date: Date) => {
  const year = date.getFullYear();
  const _month = date.getMonth() + 1;
  const month = _month < 10 ? `0${_month}` : _month;
  const _day = date.getDay() + 1;
  const day = _day < 10 ? `0${_day}` : _day;
  const _hour = date.getHours();
  const hour = _hour < 10 ? `0${_hour}` : _hour;
  const _min = date.getMinutes();
  const min = _min < 10 ? `0${_min}` : _min;
  const _sec = date.getSeconds();
  const sec = _sec < 10 ? `0${_sec}` : _sec;
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};
