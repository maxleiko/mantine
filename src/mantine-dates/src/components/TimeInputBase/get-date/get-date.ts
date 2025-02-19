import dayjs from 'dayjs';

export function getDate(
  hours: string,
  minutes: string,
  seconds: string,
  format: '12' | '24',
  amPm?: string
) {
  const date = dayjs();
  let _hours = parseInt(hours, 10);
  const _minutes = parseInt(minutes, 10);
  const _seconds = parseInt(seconds, 10);

  if (Number.isNaN(_hours)) {
    _hours = 0;
  }

  return date
    .hour(format === '12' && amPm === 'pm' ? (_hours < 12 ? _hours - 12 : _hours) : _hours)
    .minute(Number.isNaN(_minutes) ? 0 : _minutes)
    .second(Number.isNaN(_seconds) ? 0 : _seconds)
    .toDate();
}
