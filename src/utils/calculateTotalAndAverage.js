import {PERIODS_MONTH_DAY} from "../config/envData";


const getDatesInRange = (startReservation, endReservation) => {
  const dates = [];
  const currentDate = new Date(startReservation);
  const endDate = new Date(endReservation);

  while (currentDate < endDate) {
    dates.push(currentDate.toISOString()
        .split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export default function calculateTotalAndAverage({
                                                   startReservation,
                                                   endReservation,
                                                   priceArray,
                                                 }) {
  if (!startReservation || !endReservation || !priceArray?.length) {
    return {
      averageSumPerDay: 0,
      totalSum: 0,
      totalDays: 0,
      error: true,
      text: "Некорректные входные данные",
    };
  }

  const currentYear = new Date(startReservation).getFullYear();

  // Формируем периоды с ценами
  const periods = Object.values(PERIODS_MONTH_DAY)
      .map((period, index) => ({
        startDate: `${currentYear}-${period.startDate}`,
        endDate: `${currentYear}-${period.endDate}`,
        priceIndex: index,
      }));

  // Получаем массив дат в диапазоне
  const datesArray = getDatesInRange(startReservation, endReservation);
  let totalSum = 0;
  let errorPeriod = false;

  // Рассчитываем общую сумму
  datesArray.forEach((date) => {
    const transformDate = new Date(date);

    // Находим период для текущей даты
    const period = periods.find(
        (period) =>
            transformDate >= new Date(period.startDate) &&
            transformDate <= new Date(period.endDate)
    );

    if (period) {
      totalSum += priceArray[period.priceIndex];
    } else {
      errorPeriod = true;
    }
  });

  // Обработка ошибки, если дата не попала в периоды
  if (errorPeriod) {
    return {
      averageSumPerDay: 0,
      totalSum: 0,
      totalDays: 0,
      error: true,
      text: "Вы выбрали некорректную дату",
    };
  }

  // Рассчитываем среднюю стоимость за день
  const totalDays = datesArray.length;
  const averageSumPerDay = Math.round(totalSum / totalDays) || 0;

  return {
    averageSumPerDay,
    totalSum,
    totalDays,
    error: false,
  };
}