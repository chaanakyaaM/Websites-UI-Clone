const network = document.querySelector('#nav-network')
const home = document.querySelector('#nav-home')
const jobs = document.querySelector('#nav-jobs')
const msg = document.querySelector("#nav-messaging")
const noti = document.querySelector('#nav-notification')
const down = document.querySelector('.down')
down.style.left='-635px';
home.addEventListener('click',()=>{
    down.style.left='-635px';
});
network.addEventListener('click',()=>{
    down.style.left='-528px';
});
jobs.addEventListener('click',()=>{
    down.style.left='-420px';
});
msg.addEventListener('click',()=>{
    down.style.left='-325px';
});
noti.addEventListener('click',()=>{
    down.style.left='-210px';
});