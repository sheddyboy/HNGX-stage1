const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const now = new Date()
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

currentDayOfTheWeek.innerText = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now);
// currentUTCTime.innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
currentUTCTime.innerText = now.getTime();