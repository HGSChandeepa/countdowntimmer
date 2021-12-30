function countDown() {
  const lastDate = new Date("December 30, 2022 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const gap = lastDate - currentDate;

  //swtting time

  const seconds = 1000;
  const minuits = seconds * 60;
  const hours = minuits * 60;
  const days = hours * 24;

  //math

  const textDay = Math.floor(gap / days);
  const textHous = Math.floor((gap % days) / hours);
  const textMunites = Math.floor((gap % hours) / minuits);
  const textSeconds = Math.floor((gap % minuits) / seconds);

  //appending

  document.querySelector("#days").innerText = textDay;
  document.querySelector("#hours").innerText = textHous;
  document.querySelector("#min").innerText = textMunites;
  document.querySelector("#sec").innerText = textSeconds;
}

countDown();
