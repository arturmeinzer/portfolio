import moment from "moment";

export const formatDate = (date) => {
    if (!date) {
        return "today";
    }
    return moment.unix(date / 1000).format("MMM YYYY");
};

const yearString = (numberYears) => (numberYears > 1 ? "years" : "year");
const monthString = (numberMonths) => (numberMonths > 1 ? "months" : "month");

export const monthDiff = (start, end) => {
    const startDate = moment.unix(start / 1000);

    let endDate;
    if (!end) {
        endDate = moment(new Date());
    } else {
        endDate = moment.unix(end / 1000);
    }

    const months = Math.round(endDate.diff(startDate, "months", true));

    if (months < 12) {
        return `${months} ${monthString(months)}`;
    }

    const years = Math.floor(months / 12);
    const restMonths = months % 12;

    if (restMonths === 0) {
        return `${years} ${yearString(years)}`;
    }

    return `${years} ${yearString(years)} ${restMonths} ${monthString(months)}`;
};
