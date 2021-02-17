function share() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = window.location.href;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert('복사 완료!')
}