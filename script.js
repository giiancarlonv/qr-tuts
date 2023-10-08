const qrBtn = document.querySelector('.js-qr-code-button'),
qrText = document.querySelector('.js-qr-text').value,
qrImage = document.querySelector('.js-qr-image');

qrBtn.addEventListener('click', ()=>{
  qrText.value;
  //if(!qrText) return;
  qrImage.classList.add('qr-image-appear');
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=174x174&data=${qrText}`
  //console.log(qrText);
})



/*
const ingredients = {
  fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  holder: ['Cone', 'Cup', 'Stick'],
  liquid: ['ice', 'water'],
  toppings: ['Chocolate', 'Sprinkles']
}
 //callback hell
const order = (flavor, holder, topping, callProd) => {
  setTimeout(() => {
    console.log('Order has placed');
    callProd();

    setTimeout(() => {
      console.log(`Flavor: ${ingredients.fruits[flavor]} was selected`);
      
      setTimeout(() => {
        console.log('cutting fruits.... ');

        setTimeout(() => {
          console.log('machine started');

          setTimeout(() => {
            console.log(`Holder: ${ingredients.holder[holder]} was selected`);
            
            setTimeout(() => {
              console.log(`Toppings: ${ingredients.toppings[topping]} was selected`);
              serve();

            }, 3000);
          }, 2000);
        }, 1000);
      }, 2000);
    }, 2000);
  }, 2000);
 
}

const production = () =>{
  console.log('production started');
}
const serve = (order) => {
  setTimeout(() => {
    console.log(`serve ice cream`)
  }, 2000);
}
//order(1, 2, 0, production);


let shopOpen = true;

const order = (time, work) => {
  return new Promise ((resolve, reject) =>{
    if(!shopOpen){ 

      setTimeout(() => {
        resolve(work());
      }, time);

    }else{
      reject (console.log('shop is close'));
    }
  })
}
order(2000, () =>
  console.log(`${ingredients.fruits[2]} was selected `)).then(() =>{
    return order(0, ()=> console.log('production has started'));
  })
  .then(() =>{
    return order(2000, ()=> console.log('chopping ...'));
  })
  .then(() =>{
    return order(1000, ()=>console.log(`added ${ingredients.liquid[0]} and ${ingredients.liquid[1]}` ));
  })
  .then(() =>{
    return order(1000,()=> console.log('start machine'));
  })
  .then(()=>{
    return order(2000, ()=>console.log(`${ingredients.holder[0]} container`));
  })
  .then(()=>{
    return order(3000,()=> console.log(`${ingredients.toppings[1]} for toppings`))
  })
  .then(()=>{
    return serve();
  }).catch(()=> console.log('cx left')).finally(() => console.log('end of day'))

/// ASYNC/ AWAIT

///promise
let isOpen = true;

const time = (ms) => {
  return new Promise((resolve, reject)=>{
    if(isOpen){
      setTimeout(resolve, ms);
    }else{
      reject(console.log('shop is close'));
    }
  });
}

const kitchen = async () =>{
  try{
    await time(2000);
    console.log(`${ingredients.fruits[3]} was selected`);
    await time(2000);
    console.log('cutting fruits.....');
    await time(1000);
    console.log(`adding ${ingredients.liquid[0]} and ${ingredients.liquid[1]}`);
    await time(1000);
    console.log('mahine started');

    await time(2000);
    console.log(`${ingredients.holder[1]}`);
    await time(3000);
    console.log(`${ingredients.toppings[0]} was selected`);
    await time(2000);
    console.log('serve ice cream');
  }
  catch(error){  
    console.log('Cx left', error);
  }
  finally{
    console.log('end of day');
  }
}
kitchen()
*/