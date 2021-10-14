export function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateArr = date.split('-');
  const day = dateArr[2];
  const month = months[parseInt(dateArr[1]) - 1];
  const year = dateArr[0];

  return `${day} ${month} ${year}`;
}

export function formatMoney(num) {
    var str = num.toString();
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const filterOp = [
  {
    id: 1,
    txt: 'Draft',
    checked: false,
  },
  {
    id: 2,
    txt: 'Pending',
    checked: false,
  },
  {
    id: 3,
    txt: 'Paid',
    checked: false,
  }
];