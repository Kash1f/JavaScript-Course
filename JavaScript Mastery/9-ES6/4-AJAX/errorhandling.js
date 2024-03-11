const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();

xhr.open("GET",URL)
xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
}
xhr.send()
