window.onload=function()
{
    const img=document.
    d("logo_img");
    img.onclick=function(){rot_icoana()};

    function rot_icoana()
    {
       
        let i=null;
        let pos=0;
        
        i=setInterval(animatie,5);
        function animatie()
        {
            if(pos == 360)
                {
                    clearInterval(i);
                }
            else
            {
                pos=pos+4;
                img.style.transform = 'rotate('+ pos +'deg)';
            }
            
        }
    }
    const descopera= document.getElementById('noutati');

    function change(event)
    {
        const obj= window.getComputedStyle(event.target);
        let culoare= obj.getPropertyValue("background-color");
        if(culoare == 'rgba(0, 0, 0, 0)')
        {
            culoare= obj.getPropertyValue("color");
        }
        descopera.style.color = culoare;
    }
    document.body.addEventListener('click', change);
}