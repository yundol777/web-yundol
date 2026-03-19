// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(tilForm);
  const date = formData.get("date");
  const title = formData.get("title");
  const content = formData.get("content");

  const tilItem = document.createElement("article");
  tilItem.className = "til-item";

  const time = document.createElement("time");
  time.textContent = date;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const description = document.createElement("p");
  description.textContent = content;

  tilItem.append(time, heading, description);
  tilList.appendChild(tilItem);

  tilForm.reset();
});
