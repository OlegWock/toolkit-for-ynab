interface DateWithoutTime {
  addMonths(count: number): DateWithoutTime;
  clone(): DateWithoutTime;
  createForToday(): DateWithoutTime;
  createFromString(input: string, format: string): DateWithoutTime;
  createFromYearMonthDate(year: number, month: number, date: number): DateWithoutTime;
  equalsByMonth(input: DateWithoutTime): boolean;
  format(formatStr?: string): string;
  getMonth(): number;
  getYear(): number;
  isAfter(date: DateWithoutTime): boolean;
  isBefore(date: DateWithoutTime): boolean;
  isBetweenMonths(start: DateWithoutTime, end: DateWithoutTime): boolean;
  startOfMonth(): DateWithoutTime;
  createFromISOString(inp: string): DateWithoutTime;
  toISOString(): string;
  monthsApart(date: DateWithoutTime): number;
}

interface YNABUtilities {
  DateWithoutTime: DateWithoutTime;
}
