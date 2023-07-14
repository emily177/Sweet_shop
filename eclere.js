window.onload=function()
{
    const ecler=document.getElementById('ecler');
    ecler.addEventListener('mouseover',changeColor);
    ecler.addEventListener('mouseout',resetColor);

    function changeColor(){
        
        let r= Math.floor(Math.random() * 255);
        let g= Math.floor(Math.random() * 255);
        let b= Math.floor(Math.random() * 255);
        let culoare ="rgb("+r+","+g+","+b+")";
        ecler.style.color= culoare;
    }

    function resetColor(){
        ecler.style.color = 'black';
    }

    function hide(event)
    {
        if(event.target.tagName === 'H2' || event.target.tagName === 'I' )
        {
            event.stopPropagation();
            return;
        }
        event.target.style.color = "bisque";
        console.log(event.target.tagName);
        
    }
    function visible(event)
    {
        if(event.target.tagName === 'H2' || event.target.tagName === 'I' )
        {
            event.stopPropagation();
            return;
        }
        event.target.style.color = "white";

    }
    document.querySelector('footer').addEventListener('mouseover', hide);
    document.querySelector('footer').addEventListener('mouseout', visible);

}