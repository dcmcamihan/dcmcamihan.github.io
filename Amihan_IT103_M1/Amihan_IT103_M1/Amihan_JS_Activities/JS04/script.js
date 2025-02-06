document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculateButton");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", () => {
        const start = new Date(startDate.value);
        const end = new Date(endDate.value);

        if (isNaN(start) || isNaN(end)) {
            result.textContent = "Please select valid dates.";
            result.className = "error";
        } else if (start > end) {
            result.textContent = "Start date cannot be after end date.";
            result.className = "error";
        } else {
            const differenceInTime = end.getTime() - start.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            result.textContent = `The difference is ${differenceInDays} days.`;
            result.className = "success";
        }
    });
});