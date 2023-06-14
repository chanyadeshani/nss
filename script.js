
var plotdata = [
    {
        x: ['Category 1', 'Category 2', 'Category 3'],
        y: [10, 20, 15],
        type: 'bar'
    }
];

// Example layout
var layout = {
    title: 'My Plotly Graph'
};

// Generate the graph
plot = Plotly.newPlot('plot', plotdata, layout);
plotly.offline.plot(data, include_plotlyjs=False, output_type='div')


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

    const result = await response.json();

    const button = document.querySelector('#button');
    const messageBox = document.querySelector('#message');
    button.addEventListener('click', () => {
    messageBox.innerText = "Reviews: " + result.reviewText;
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
//postJSON(data);
function tableCreate() {
 const tableDiv = document.getElementById('octants');
 const tbl = document.createElement('table');
 tbl.style.width = '100px';
 tbl.style.border = '1px solid black';

 for (let i = 0; i < 3; i++) {
   const tr = tbl.insertRow();
   for (let j = 0; j < 2; j++) {
     if (i === 2 && j === 1) {
       break;
     } else {
       const td = tr.insertCell();
       td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
       td.style.border = '1px solid black';
       if (i === 1 && j === 1) {
         td.setAttribute('rowSpan', '2');
       }
     }
   }
 }
 tableDiv.innerHTML = tbl.outerHTML;
}

tableCreate();


