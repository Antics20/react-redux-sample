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

    static getArticle(article) {
        return fetch('http://localhost:3000/articles', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          }).then(
            response => response.json(),
            error => console.log('An error occured.', error)
        ).then(json => {
            return json;
        })
    }
}

export default ArticlesApi;
