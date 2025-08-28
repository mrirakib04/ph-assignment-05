console.log("hello, world!");

// Heart Function
const heartElement = document.getElementById("heart");
let heartQuantity = 0;
const heartClick = () => {
  heartQuantity += 1;
  heartElement.innerText = heartQuantity;
};

// Call Functionality
// Coin
let coin = 100;
const coinElement = document.getElementById("coin");
// History
const hotlineCallHistory = document.getElementById("history");
// Call Function
const onCallClick = (name, number) => {
  if (coin < 20) {
    return alert("You don't have enough coins to make call.");
  }
  const now = new Date();
  const date = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const historyDiv = document.createElement("div");
  historyDiv.classList.add(
    "w-full",
    "bg-[#fafafa]",
    "flex",
    "items-center",
    "gap-2",
    "justify-between",
    "shadow-md",
    "p-3",
    "rounded-xl",
    "font-medium"
  );

  const historyChildDiv = document.createElement("div");

  const historyChildH3 = document.createElement("h3");
  historyChildH3.classList.add("text-lg", "font-semibold");

  const historyChildP = document.createElement("p");
  historyChildP.classList.add("text-gray-500");

  const historyDivP = document.createElement("p");
  historyDivP.classList.add("text-gray-500");

  historyChildH3.innerText = name;
  historyChildP.innerText = number;
  historyDivP.innerText = date;

  historyChildDiv.appendChild(historyChildH3);
  historyChildDiv.appendChild(historyChildP);
  historyDiv.appendChild(historyChildDiv);
  historyDiv.appendChild(historyDivP);
  hotlineCallHistory.appendChild(historyDiv);
  alert(`You have called - ${name}: ${number}.`);
  coin -= 20;
  coinElement.innerText = coin;
};

// History Clear Functionality
const historyClearClick = () => {
  hotlineCallHistory.innerHTML = "";
  alert("Call history has been cleared.");
};

// Copy Functionality
const copyElement = document.getElementById("copy");
let copyCount = 0;
const copyClick = (num) => {
  copyCount += 1;
  copyElement.innerText = copyCount;
  alert(`You have copied this helpline number: ${num}`);
  navigator.clipboard.writeText(num);
};
