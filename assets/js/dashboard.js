
import { createCards } from '../js/createCards.js';
// import { addToCart ,updateCartCount  } from '../js/cart.js';
import { getUser } from "./getterAndSetter.js";

const user = getUser();
console.log(user);

    const url = "https://6555dc0584b36e3a431e8028.mockapi.io";

    const perfumeList = document.getElementById("list");
  
    const fetchedProducts = async () => {
        try {
            const result = await fetch(url+'/perfumes');
            if (!result.ok) {
                throw new Error(`Failed to fetch data. Status: ${result.status}`);
            }
    
            const res = await result.json();
            console.log(res);
            displayPerfume(res);
        } catch (err) {
            console.error(err);
        }
    };
    
    fetchedProducts();



    export function displayPerfume(items) {
        perfumeList.innerHTML = "";
        items.forEach((perfume, index) => {

              createCards(false , perfume , index , user.isAdmin
                );
        
        });
        const cards = document.querySelectorAll(".card");
        console.log(cards);
           cards.forEach(card => {
            card.addEventListener('click', (e) => {
             e.preventDefault();
             const cardId = card.id.slice(4);
             console.log(cardId);
             
            }
              );
      });
    }

//     document.addEventListener("DOMContentLoaded", function() {
      
//       document.querySelector("#linkFourthItem")&& document.querySelector("#linkFourthItem").addEventListener('click', function(event) {
//         event.preventDefault();
//         if(!(JSON.parse(localStorage.getItem('carts')))){
//           alert("The cart is Empty");
//         }
//         else{
//          location.href = "cart.html" ;
//         }
//       });
      
//   });

  

  document.addEventListener("DOMContentLoaded", function() {
    
        // Attach click event listeners to each card
      
   
      
    

      const addToCartButtons = document.querySelectorAll(".addToCart");
       addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("clicked");
          addToCart(flights[index]);
          updateCartCount((flights[index].id)-1);
          
          location.href = "cart.html" ;
        });
      });

      
    });
    
  if(document.querySelector("#showAll")){
    document.querySelector("#showAll").addEventListener('click', function(event) {
      event.preventDefault();
      displayPerfume(flights);
    })
    // if(user.isAdmin){
    //   const addButton = document.querySelector("#addButton");
    //   addButton.style.display = "block";
    // }
    document.querySelector("#addButton").addEventListener('click', function(event) {
      event.preventDefault();
    //   location.href="addFlight.html";
    })

  }

//   displayPerfume(flights); 
    

  

 