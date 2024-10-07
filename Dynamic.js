document.addEventListener('DOMContentLoaded',() => {
   
   let limit = 9;
    let currentPage = 1;
    

    function fetchPosts() {
    

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error with the status: " + response.status);
        }
        return response.json();
    })
    .then((posts) => {
        
        
        let container = document.getElementById("main-container");
        
        posts.forEach(post => {
            const article = document.createElement("article");
            
            const title = document.createElement("h1");
            title.textContent = post.title;
            
            const body = document.createElement("p");
            body.textContent = post.body;

            article.appendChild(title);
            article.appendChild(body);
            
            container.appendChild(article);
          
        });
        currentPage++;
       
    })
    .catch((error) => {
        console.error("Error fetching posts:", error);
       
    });
}
       fetchPosts();


    window.addEventListener("scroll", () => {
        if(window.innerHeight  + window.scrollY >= document.body.offsetHeight -10){
            fetchPosts();
        }

    });
   });