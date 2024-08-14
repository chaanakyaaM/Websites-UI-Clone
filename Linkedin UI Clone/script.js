const network = document.querySelector('#nav-network')
const home = document.querySelector('#nav-home')
const jobs = document.querySelector('#nav-jobs')
const msg = document.querySelector("#nav-messaging")
const noti = document.querySelector('#nav-notification')
const down = document.querySelector('.down')
network.addEventListener('click',()=>{
    down.style.left='-438px';
});
home.addEventListener('click',()=>{
    down.style.left='-525px';
});
jobs.addEventListener('click',()=>{
    down.style.left='-350px';
});
msg.addEventListener('click',()=>{
    down.style.left='-270px';
});
noti.addEventListener('click',()=>{
    down.style.left='-175px';
});