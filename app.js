const status = document.querySelector('.status')
const btnAdd = document.querySelector('.btn-add')
let url1 = "https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/7/12/photo1689131603230-1689131603440625215527.png";
let url2 = "https://cdn.tgdd.vn/Files/2023/12/14/1557522/bi-quyet-de-co-than-hinh-dep-quyen-ru-nhu-lisa-blackpink-202312141421494334.jpg";

async function postNewFeed(content){
    btnAdd.textContent = "Đang đăng bài ..."
    const url = 'https://graph.facebook.com/v19.0/282435648283250/photos'
    const accessToken = ""
    const formData = new FormData();
    formData.append('message', content);
    formData.append('access_token', accessToken);
    formData.append('published', true);
    formData.append('url',url1)
    const response = await fetch(url,{
        method: 'POST',
        body: formData
    })
    const result = await response.json();
    if(response.ok){
        console.log(result)
        status.textContent = `Status : ${result.id}`
        btnAdd.textContent = "Đăng bài"
    }
}
