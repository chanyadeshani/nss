async function postJSON(data) {
  try {
    const response = await fetch(
      'https://hpmt-mock-api.herokuapp.com/ask',
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    const button = document.querySelector('#button');
    const messageBox = document.querySelector('#message');
    button.addEventListener('click', () => {
    messageBox.innerText = "Reviews: " + result;
});

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


