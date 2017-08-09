class article{
  static getarticle() {
    return fetch ('http://localhost:3001/articles').then(response=> {
      return response.json();

    }).catch.(error=>{
      return error;
    });
  }

}
export default article;
