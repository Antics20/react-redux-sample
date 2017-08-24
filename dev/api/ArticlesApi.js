import fetch from 'isomorphic-fetch';

class ArticlesApi {
    static postArticle(article) {
        return fetch('http://localhost:3000/articles', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        }).then(
            response => response.json(),
            error => console.log('An error occured.', error)
        ).then(json => {
            return json;
        })
    }

    static getAllArticles() {
        return fetch('http://localhost:3000/articles').then(response =>
                   response.json(),
                   error => console.log('An error occured.', error)
            ).then(json => {
                return json;
        })
    }

    static updateArticle(article) {
        return fetch(`http://localhost:3000/articles/${article.id}`, {
            method: "PUT",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(article)
        }).then(response => response.json(),
                error => console.log('An error occured.', error)
        ).then(json => {
                return json;
            })
    }

    static likeArticle(article) {
        let likedArticle = Object.assign({}, article, article.likes++);
        return fetch(`http://localhost:3000/articles/${article.id}`, {
            method: "PUT",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(likedArticle)
        }).then(response => response.json(),
                error => console.log('An error occured.', error)
        ).then(json => {
                return json;
            });
    }
}

export default ArticlesApi;