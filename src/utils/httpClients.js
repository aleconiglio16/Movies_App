const api = "https://api.themoviedb.org/3"



export function get(path) {
    return fetch(api + path, {
        headers: {
            Authorization: 
            " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2E3ZTk1NTA1NDNmMGYyMDI3ZGZlYzc3ODA4NmFkNyIsInN1YiI6IjYyMTkzNzU1NTRmNmViMDA0MzkzNWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lRThXe7ZHTd7c8581xPLKipjDpKFuEScmwURnoA_KGU",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then(result=> result.json())

}