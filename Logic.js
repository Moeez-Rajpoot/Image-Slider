const backbtn = document.getElementById('back');
const nextbtn = document.getElementById('next');
const Gallery = document.getElementById('container');


Gallery.addEventListener('wheel' , (e)=>{

   e.preventDefault();
   Gallery.scrollLeft +=  e.deltaY; 

});

nextbtn.addEventListener('click' , ()=>{

    Gallery.scrollLeft += 900;
});

backbtn.addEventListener('click' , ()=>{

    Gallery.scrollLeft -= 900;
});


