

async function getUsers(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await users.json();
    const usersArray = jsonUserData.map(users =>{
        return users;
    });
    console.log(usersArray);
    //createSelectOptions(usersArray);
    populateSelectMenu(usersArray);
    return usersArray;
}


function createElemWithText(element = 'p', textContent = "", className){
    const newElem = document.createElement(element);
    newElem.textContent = textContent;
    newElem.className = className;
    return newElem;
}

function createSelectOptions(usersArray) {
    if(!usersArray){
        return;
    }
    const optionArray = usersArray.map(users =>{
        var opt = document.createElement('option');
        opt.value = users.id;
        console.log(opt.value);
        opt.text = users.name;
        console.log(opt.text);
        return opt;
    });
    return optionArray;

}

function toggleCommentSection(postId){
    if(!postId){
        return;
    }
    if(postId > 10 || postId < 1){
        return null;
    }
    
    const toggle = document.getElementsByTagName("selectMenu");
    return toggle;
}

function toggleCommentButton(postId){
    if(!postId){
        return;
    }
}

function deleteChildElements(parentElement){
    if(parentElement instanceof HTMLElement){
        return;
    }
    var child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild();
        child = parentElement.lastElementChild;
    }
    return parentElement;
}

function addButtonListeners() {
    var buttons = document.querySelectorAll(".main");
    console.log(buttons);
    var postID = buttons.dataset.postId;
    for(let i = 0; i < buttons.length; i++){
        
        buttons[i].addEventListener("click", function (e){
            toggleComments(e, postID)}, false);
        }

        return buttons;
    }



function removeButtonListeners(){
    //call for buttons to be selected
    var postID = buttons.dataset.postId;
    for(let i = 0; i < buttons.length; i++){
        buttons[i].removeEventListener();
    }
    return buttons;
}

async function getUserPosts(userID){
    if(!userID){
        return;
    }
    let postsArray = [];
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const jsonPostData = await posts.json();
    postsArray = jsonPostData.filter((post) =>{
        return post.userId === userID;
    });
    console.log(postsArray);
    return postsArray;

}



async function getUser(userID){
    if(!userID){
        return;
    }
    const users = await fetch("https://jsonplaceholder.typicode.com/users?id=" + userID);
    const jsonUserData = await users.json();
    console.log(jsonUserData);
    return jsonUserData;



}

async function createComments(){
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
    const jsonCommentData = await comments.json();
    var fragment = document.createDocumentFragment();


}

function populateSelectMenu(users){
    if(!users){
        return;
    }
    const selectMenu = document.getElementById("selectMenu");
    var optionsArray = createSelectOptions(users);
    console.log(optionsArray);
    for(let i = 0; i < 10; i++){
        selectMenu.append(optionsArray[i]);
    }
    

    return selectMenu;
}

async function createPosts(posts){
    if(!posts){
        return;
    }


}

function displayPosts(posts){
    if(!posts){
        return ;
    }
}

function refreshPosts(posts){
    if(!posts){

    }
    return posts;
}

function selectMenuChangeEventHandler() {

}



getUser(2);
async function getPostComments(postID){
    if(!postID){
        return;
    }
    
    var postComments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postID);
    const jsonCommentData = await postComments.json();
    return jsonCommentData;
}

async function displayComments(postID){
    if(!postID){
        return;
    }

    const section = document.createElement("section");
    section.dataset.postID;
    section.classList.add("comments");
    section.classList.add("hide");

    const comments = await getPostComments(postID);
    const fragment = createComments(comments);
    section.append(fragment);
    return section;
}


function toggleComments(event, postId){

}


function initPage(){

}

function initApp(){

}