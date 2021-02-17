function back(){
    let url = window.location.href;
    let new_url = url.split('result.html')[0] + 'index.html';
    window.location.href= new_url;
}
