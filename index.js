const yesBtn = document.querySelector(' #yesBtn'); 

yesBtn.addEventListener('click', function () { 
    alert('Amor, quiero pedirte disculpas por TODO. Siento mucho aquellos malos entendidos y me duele haberte lastimado. Quiero que sepas que te amo. Eres mi todo y no puedo soportar la idea de perderte. Espero que los dos sigamos poniendo de nuestra parte para sobrellevar el caos. Siempre hemos tenido dias asi, pero podemos trabajar para hacerlos minimos. Trabajar ambos para no volver a tenerlos. Como decia Frida Kahlo: "Pies para que los tengo, si tengo alas para volar"; contigo, amor, quiero volar a un futuro mejor, superandolo todo, amandonos mas, fortaleciendo nuestra relacion.')
}); 

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () { 
    const randomX = parseInt(Math.random()*100); 
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+' %');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn,style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
 })