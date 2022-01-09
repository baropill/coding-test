function showImg(id, file) {
  document.getElementById(id).src = URL.createObjectURL(file)
}

function getData() {
  console.log('Requested GET')
  const now = new Date
  document.getElementById('ts_get').innerText = now.toString()

  document.getElementById('name').innerText = 'NAME'
  document.getElementById('git').innerText
    = document.getElementById('git').href = 'https://www.baropill.com/'
  document.getElementById('uri').src = ''
} // replace function

function postData() {
  console.log('Requested POST')
  const now = new Date
  document.getElementById('ts_post').innerText = now.toString()
} // replace function