document.querySelectorAll(".questions").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
      answer.style.display = "block";
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = 1;
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    } else {
      answer.style.maxHeight = "0";
      answer.style.opacity = 0;
      plusIcon.style.display = "inline";
      minusIcon.style.display = "none";
      setTimeout(() => {
        answer.style.display = "none";
      }, 300);
    }
  });
});
