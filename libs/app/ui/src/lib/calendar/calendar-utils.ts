import {
  addDays,
  endOfMonth,
  getWeeksInMonth,
  startOfMonth,
  subDays,
} from 'date-fns';

export const getCalendarMeta = (d: Date) => {
  return {
    current: d,
    monthStart: startOfMonth(d),
    monthEnd: endOfMonth(d),
  };
};
export interface CalendarMeta {
  current: Date;
  monthStart: Date;
  monthEnd: Date;
}

export const getWeeksCount = (startFrom: Date = new Date(), count: number) => {
  let daysCount = 1;
  return [
    ...[...Array(count).keys()].map(() => [
      ...[...Array(7).keys()].map(() => {
        return addDays(startFrom, daysCount++);
      }),
    ]),
  ];
};
export const weekBetweenMonth = (date: Date) => [
  ...[...Array(date.getDay() - 1).keys()]
    .map((v, i) => subDays(date, i + 1))
    .sort(() => -1),
  ...[...Array(8 - date.getDay()).keys()].map((v, i) => addDays(date, i)),
];

export const getCalendarWeeksList = (meta: CalendarMeta) => {
  const FirstWeek = weekBetweenMonth(meta.monthStart);
  const weeks = getWeeksCount(
    FirstWeek[FirstWeek.length - 1],
    getWeeksInMonth(meta.current) - 2
  );
  weeks.unshift(FirstWeek);
  weeks.push(weekBetweenMonth(meta.monthEnd));
  return weeks;
};
