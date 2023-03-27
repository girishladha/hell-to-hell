// document.querySelector('.adoption').style.display='none';
document.querySelector('.section2').addEventListener("click",()=>
{
    document.querySelector('.incubation').style.display = 'none';
    document.querySelector('.acceleration').style.display = 'none';
    document.querySelector('.adoption').style.display = 'none';
}
);
document.querySelector('.incb').addEventListener("click",()=>
{
    document.querySelector('.incubation').style.display = 'block';
    document.querySelector('.acceleration').style.display = 'none';
    document.querySelector('.adoption').style.display = 'none';
}
);

document.querySelector('.accel').addEventListener("click",()=>
{
    document.querySelector('.incubation').style.display = 'none';
    document.querySelector('.acceleration').style.display = 'block';
    document.querySelector('.adoption').style.display = 'none';
}
);

document.querySelector('.adopt').addEventListener("click",()=>
{
    document.querySelector('.incubation').style.display = 'none';
    document.querySelector('.acceleration').style.display = 'none';
    document.querySelector('.adoption').style.display = 'block';
}
);