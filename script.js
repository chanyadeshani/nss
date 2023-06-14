async function postJSON(data) {
  try {
    const response = await fetch(
      'https://nss-container-p57byuk3wa-uc.a.run.app/api/ask',
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = response;

    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

const data = {
  query: 'happy',
  top_n: 10,
  threshold: 0.75,
};
var question = document.getElementById('queston').value;
console.log(question);
postJSON(data);

var text = 'Nothing yet ';

const button = document.querySelector('#button');
const messageBox = document.querySelector('#message');
button.addEventListener('click', () => {
  messageBox.innerText = "Reviews: " + text;
});
