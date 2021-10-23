export function diff_years(dt2: Date, dt1: Date) {
  var diff = (dt2.getTime() - dt1.getTime()) / 31557600000;
  return Math.round(diff);
}
