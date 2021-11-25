export const popolateWeekDateFromToDay = (): Date[] => {
  const tempDateArray: Date[] = [];
  let day = new Date();
  for (let i = 0; i < 7; i++) {
    const dayTime = 24 * 60 * 60 * 1000;
    if (i === 0) {
      tempDateArray.push(day);
    } else {
      day = new Date(day.getTime() + dayTime);
      tempDateArray.push(day);
    }
  }
  return tempDateArray;
};

export const popolateTimeSlots = (): { label: string; selected: boolean }[] => {
  const resultArray: { label: string; selected: boolean }[] = [];
  for (let i = 14; i < 24; i += 2) {
    const label: string = `${i}.00`;
    resultArray.push({ label: label, selected: false });
  }
  return resultArray;
};
