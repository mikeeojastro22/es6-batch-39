// fetch - accepts an endpoint as an argument
// fetch returns a promise
// data.json() - parses the value returned by fetch
// second .then() - processes the data from the parsed value - returns what we see when we input the url in the browser
fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((data) => data.json())
.then((info) => {   
    const { postId, id, name, email, body } = info;
    console.log(`
        postId: ${postId}
        id: ${id}
        name: ${name}
        email: ${email}
        body: ${body}
    `);
});

// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }