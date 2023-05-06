/*examine the document object
console.log(document);
console.log(document.domain);
console.log(document.title);
console.log(document.doctype);
document.title=123;
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.forms[0]);
document.all[10].textcontent='hello';
console.log(document.links);*/
//console.log(document.images);


// QUERY SELECTOR


//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
//var headTitle=document.getElementById('header-title');
//var head=document.getElementById('main-header');
//console.log(headTitle);
//headTitle.textContent='hello';
//headTitle.innerText='goodbye';
//console.log(headTitle.innerText);
//headTitle.innerHTML='<h3>Hello</h3>';
//head.style.borderBottom='solid 3px #000';

//code

//var items=document.getElementsByTagName('h2');
//console.log(items);
//items[0].style.fontWeight='bold';
//items[0].style.color='green';
//items.style.fontWeight='bold';
//items.style.="green";
//.fontWeight='bold';

// GETELEMENTBYCLASSNAME
/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';*/

//GETELEMENTSBYNAMES

//var items=document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[1].textContent='hello';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';

//items.style.backgroundColor='#f4f4f4';
//for(var i=0;i<items.length;i++)
//{
  //  items[i].style.backgroundColor='#f4f4f4';
//}
//var items=document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[2]);
//items[2].textContent='hello';

//items[2].style.backgroundColor='green';

//for(var i=0;i<items.length;i++){
  //  items[i].style.color='red';
    //items[i].style.fontWeigth='bold';
//}

//getelementbytagname
//var li=document.getElementsByTagName('li-item');
//console.log(li);
//console.log(li[2]);
//for(var i=0;i<li.length;i++){
  //li[i].style.color='#f4f4f4';
  //li[i].style.fontWeight='bold';
//}


//queryselector

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';

//var input=document.querySelector('input');
//input.value='Hello world';

//var submit=document.querySelector('input[type="submit"]');
//submit.value='send';

//var items=document.querySelector('.list-group-item');
//items.style.color='red';

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';

//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';
//var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.visibility='hidden';

//var seconfontitem=document.querySelectorAll('.list-group-item:nth-Child(2)');
//secondfontitem.style.color='green';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
  //odd[i].style.backgroundColor='green';
//}

//queryselectorall

//var titles=document.querySelectorAll('.title');
//titles[0].textContent='hello';
// css selector
//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<odd.length;i++){
  //odd[i].style.backgroundColor='#f4f4f4';
  //even[i].style.backgroundColor='#ccc';
//}

//  traversing the dom//

//var itemList=document.querySelector('#items');
//parent node property
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode);

//paraentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement);

//ChildNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//first child
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello 1S';

//lastChild
//console.log(itemList.lastChild);


//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hi';

//nextsibiling

//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previvsiousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//create element
//createElementmethod
var newDiv=document.createElement('div');
//add class
newDiv.className='hello;'
//addid
newDiv.id='hello1';

//add atribute
newDiv.setAttribute('title','Hello Div');

//create text node
var NewDivText=document.createTextNode('hello World');

//add text to div
newDiv.appendChild(NewDivText);

//
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');


console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);

var newlist=document.createElement('li');
console.log(newlist);
var NewlistText=document.createTextNode('hello Word');
newlist.appendChild(NewlistText);
var item=document.querySelector('header.container');
var li=document.querySelector('.list-group-item:nth-child(1)');
item.insertBefore(newlist,li)
