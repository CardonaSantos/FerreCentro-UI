import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import currency from "currency.js";
const zona = "America/Guatemala";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formattFecha = (value: string | Date) => {
  return dayjs(value).tz(zona).format("DD/MM/YYYY");
};

export const formattMoneda = (
  value: string | number,
  decimales = 2
): string => {
  return currency(value, {
    precision: decimales,
    symbol: "Q ",
    separator: ",",
    decimal: ".",
    pattern: "!#", // símbolo antes del número ("Q 1,234.50")
  }).format(); // ← ahora devuelve string
};
