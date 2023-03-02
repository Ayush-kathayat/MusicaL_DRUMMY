

window.addEventListener('keydown', function(event) 
{
  if (/^\d$/.test(event.key) || event.key === "+"  || event.key === "-")
  {
    const butto = event.key;

    switch (butto) {

        case "0":  
        const drum_0 = document.querySelector(".d_4");
        drum_0.classList.add('shaker','shadowColor');
        break;
  
  
        case "1": 
        const drum_1 = document.querySelector(".d_7");
        drum_1.classList.add('shaker','shadowColor');
        break;
  
        case "2": 
        const drum_2 = document.querySelector(".d_1");
        drum_2.classList.add('shaker','shadowColor');
        break;
  
        case "3": 
        const drum_3 = document.querySelector(".d_3");
        drum_3.classList.add('shaker','shadowColor');
        break;
  
        case "4":       
        const drum_4 = document.querySelector(".d_2");
        drum_4.classList.add('shaker','shadowColor');
        break;
  
        case "5": 
        const drum_5 = document.querySelector(".d_8");
        drum_5.classList.add('shaker','shadowColor');
        break;
  
        case "6": 
        const drum_6 = document.querySelector(".d_11");
        drum_6.classList.add('shaker','shadowColor');
        break;
  
        case "7": 
        const drum_7 = document.querySelector(".d_6");
        drum_7.classList.add('shaker','shadowColor');
        break;
  
        case "8": 
        const drum_8 = document.querySelector(".d_9");
        drum_8.classList.add('shaker','shadowColor');
        break;
  
        case "9": 
        const drum_9 = document.querySelector(".d_12");
        drum_9.classList.add('shaker','shadowColor');
        break;

        case "+": 
        const drum_10 = document.querySelector(".d_10");
        drum_10.classList.add('shaker','shadowColor');
        break;

        case "-": 
        const drum_11 = document.querySelector(".d_5");
        drum_11.classList.add('shaker','shadowColor');
        break;

        default : break;
    };
  }
   else
  {
    alert("PLEASE ENTER A NUMBER BETWEEN 0-9 ONLY");
    const drums = document.querySelectorAll(".drum");

    for(let i = 0 ; i < drums.length ; i++)
    {
        drums[i].classList.remove('shaker','shadowColor');
    }
  }

});




window.addEventListener('keyup', function(event) 
{
  if (/^\d$/.test(event.key) || event.key === "+"  || event.key === "-")
  {
    const butto = event.key;

    switch (butto) {

        case "0":  
        const drum_0 = document.querySelector(".d_4");
        drum_0.classList.remove('shaker','shadowColor');
        break;
  
  
        case "1": 
        const drum_1 = document.querySelector(".d_7");
        drum_1.classList.remove('shaker','shadowColor');
        break;
  
        case "2": 
        const drum_2 = document.querySelector(".d_1");
        drum_2.classList.remove('shaker','shadowColor');
        break;
  
        case "3": 
        const drum_3 = document.querySelector(".d_3");
        drum_3.classList.remove('shaker','shadowColor');
        break;
  
        case "4":       
        const drum_4 = document.querySelector(".d_2");
        drum_4.classList.remove('shaker','shadowColor');
        break;
  
        case "5": 
        const drum_5 = document.querySelector(".d_8");
        drum_5.classList.remove('shaker','shadowColor');
        break;
  
        case "6": 
        const drum_6 = document.querySelector(".d_11");
        drum_6.classList.remove('shaker','shadowColor');
        break;
  
        case "7": 
        const drum_7 = document.querySelector(".d_6");
        drum_7.classList.remove('shaker','shadowColor');
        break;
  
        case "8": 
        const drum_8 = document.querySelector(".d_9");
        drum_8.classList.remove('shaker','shadowColor');
        break;
  
        case "9": 
        const drum_9 = document.querySelector(".d_12");
        drum_9.classList.remove('shaker','shadowColor');
        break;

        case "+": 
        const drum_10 = document.querySelector(".d_10");
        drum_10.classList.remove('shaker','shadowColor');
        break;

        case "-": 
        const drum_11 = document.querySelector(".d_5");
        drum_11.classList.remove('shaker','shadowColor');
        break;

        default : break;
    };
  }
   else
  {
    alert("PLEASE ENTER A NUMBER BETWEEN 0-9 ONLY");

    const drums = document.querySelectorAll(".drum");

    for(let i = 0 ; i < drums.length ; i++)
    {
        drums[i].classList.remove('shaker','shadowColor');
    }

  }

});
