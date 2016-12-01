let books = [
  {author: 'Thomas Pynchon', writer: 'Bleeding Edge'},
  {author: 'Haruki Murakami', writer: '1Q84'},
  {author: 'John D MacDonald', writer: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', writer: 'Understanding Ecmascript 6'}
]
let user=[
{
 name:'prabh'
}]
function writeSearch () {
  let aName = document.getElementById('writerSearch').value
  let name = books.filter((x) => x.writer === aName)
  try {
    document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function addBook () {
  books.push({author:document.getElementById('Book').value ,title:document.getElementById('title').value })
  document.getElementById('Book').value=""
  document.getElementById('title').value=""
}

function showAllBooks () {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode('a book')
  listItem.appendChild(textnode)
  document.getElementById('allTheBooks').appendChild(listItem)
}


function adduser () {
  user.push({author:document.getElementById('name').value ,title:document.getElementById('identity').value })
  document.getElementById('name').value=""
  document.getElementById('identity').value=""
}