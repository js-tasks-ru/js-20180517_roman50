'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
//function makeFriendsList (friends) {
//}

function makeFriendsList (friends) { 

    let ulList = document.createElement('ul');  
    
    ulList.innerHTML = friends.map( (item)=> {
		                        return `<li> ${item.firstName} ${item.lastName} </li>` 
		                        } )
		                      .join('');
                     
    return ulList;
}