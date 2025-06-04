
// Arrays
const Days = [
    8,
    124,
    9000,
    2,
    42
];

const Meetings =[
    "ten",
    "thirty",
    "as many as possible",
    "hopefully no",
    "between eight and eighty"
]

const Costs = [
    8.99, 
    20000,
    100000,
    300,
    98
]

// Function to pick random day,meeting and cost values
function showRandomMessage() {
    const randomIndexDays = Math.floor(Math.random() * Days.length);
    const Day = Days[randomIndexDays];

    const randomIndexMeetings = Math.floor(Math.random() * Meetings.length);
    const Meeting = Meetings[randomIndexMeetings];

    const randomIndexCosts = Math.floor(Math.random() * Costs.length);
    const Cost = Costs[randomIndexCosts];
    document.getElementById('message').textContent = "it's take "+Day+" days, "+Meeting+" meetings, and it'll cost about £"+Cost+".";
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.Button');
    if (button) {
        button.addEventListener('click', showRandomMessage);
    }
});