const message = document.querySelector('#message')

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  message.classList.add('hidden')
  
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=details&format=json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[`ISBN:${choice}`].details.title
        document.querySelector('img').src = `https://covers.openlibrary.org/b/isbn/${choice}-L.jpg`
        document.querySelector('.publish').innerText = "Publish Date: " + data[`ISBN:${choice}`].details.publish_date
        document.querySelector('.publisher').innerText = "Publisher: " + data[`ISBN:${choice}`].details.publishers
        document.querySelector('.author').innerText = "By: " + data[`ISBN:${choice}`].details.authors[0].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  
}
