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
var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[2]);
items[2].textContent='hello';

items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.color='red';
    items[i].style.fontWeigth='bold';
}

//getelementbytagname
var li=document.getElementsByTagName('li-item');
console.log(li);
console.log(li[2]);
for(var i=0;i<li.length;i++){
  li[i].style.color='#f4f4f4';
  li[i].style.fontWeight='bold';
}



