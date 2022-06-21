module.exports = {
  randomNumber: (length) => {
    let text = "";
    const possible = "123456789";
    for (let i = 0; i < length; i++) {
      const sup = Math.floor(Math.random() * possible.length);
      text += i > 0 && sup === i ? "0" : possible.charAt(sup);
    }
    return Number(text);
  },
  getDateTime: () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  },
};
