

// fetch(url)
//     .then(response => response.json())
//     .then(result => {
//             console.log(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
//     })

async function movie() {
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507";
    let result = await fetch(url);
    result = await result.json();
    console.log(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
};

export {movie};