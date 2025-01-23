let menu = document.querySelector(".menu");
let newChat = document.querySelector(".chtbtn");
let btn1 = document.querySelector(".helpbtn");
let btn2 = document.querySelector(".activitybtn");
let btn3 = document.querySelector(".settingbtn");
let sidebar = document.querySelector(".sideNavigation");
let sendbtn = document.querySelector(".fa-paper-plane");
let msg = document.querySelector(".message input");
let history = document.querySelector(".recent");
let result = document.querySelector(".result");
const greet = document.querySelector(".greet");
let head = document.querySelector(".recentHead");

//Adding eventlistner to the menu button to expand or close the sidebar
menu.addEventListener("click",() => {
    document.querySelector(".chatArea").style.width = "100vw"
    if(sidebar.classList.toggle("expandClose")) {
        head.style.display = "none";
    } else {
        head.style.display = "block";
    }
})

//Adding the fuctionality of the sending button appera or vanish as per the input in input field
document.querySelector(".message input").addEventListener("keyup",(e) => {
    if(e.target.value.length > 0) {
       sendbtn.style.display = "inline";
    } else {
       sendbtn.style.display = "none";
    }
})

//Adding the functionality to load question when send button is clicked
sendbtn.addEventListener("click",() => {
    getGeminiResponce(msg.value,true);
    msg.value = "";
})

//Adding the functionality to load response when enter is clicked
msg.addEventListener("keypress",(event) => {
    if(event.key === "Enter") {
        getGeminiResponce(msg.value,true);
        msg.value = "";
    }
})

//Adding eventlistner on new chat button start a new chat
newChat.addEventListener("click",() => {
    result.innerHTML = "";
    greet.style.display = "block";
})

result.innerHTML = "";      //Firstly setting the result area blank


//Adding function to get the responce
function getGeminiResponce(question,appendHistory) {            //The question is arriving from the input area when we click the send btn
    console.log(question);


    if(appendHistory) {
        let historyLi = document.createElement("li");
        historyLi.addEventListener("click",() => {
            getGeminiResponce(question,false);
        })
        historyLi.innerHTML = `${question}`;
        history.append(historyLi);
    }

        let resultTitle = `<div class="resultTitle">
            <img class = "resImg" src="./images/robot.png" alt="This the sample image">
        <p>${question}</p></div>`;

        let resultAnimation = `<div class="loader">
            <img src="./images/star.svg" alt="This is star">
        </div>`;

        let resultLoad = ` <div class="textLoad">
            <hr class="line">
            <hr class="line">
            <hr class="line">
        </div>`;

        result.innerHTML += resultTitle;
        result.innerHTML += resultAnimation;
        result.innerHTML += resultLoad;
        

    let AIURL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCyDy9ttnTRDA6ilA2PVGWEhJy1N9yu-xE";

    fetch(AIURL,{
        method: "POST",
        body: JSON.stringify({
            contents : [{parts:[{text: question}]}],
        }),
    }).then((response) => response.json()).then((data) => {
        
        let responseData = jsonEscape(data.candidates[0].content.parts[0].text);

        let responseArray = responseData.split("**");
        let newResponse = "";

        // for (let i = 0; i < responseArray.length; i++) {
        //    if(i == 0 || i%2!==1) {
        //         newResponse+=responseArray[i];
        //    } else {
        //         newResponse += "<strong>"+responseArray[i]+"</strong>";
        //    }
        // }

        for (let i = 0; i < responseArray.length; i++) {
            // Remove stars from the current response
            let cleanedResponse = responseArray[i].replace(/\*/g, ""); // Remove all '*' characters
        
            if (i % 2 === 1) {
                // Add bolded text with a class
                newResponse += "<strong>" + cleanedResponse + "</strong>";
            } else {
                // Add plain text
                newResponse += cleanedResponse;
            }
        
            // Add a line break after each segment for spacing
            if (i !== responseArray.length - 1) {
                newResponse += `<br>`;
            }
        }
        

        //Appending the result on the resultArea on the screen
        result.innerHTML += `<div class = "resultResponse">
        <p id = "resContent">${newResponse}</p></div>`;


        const resultLoadElement = document.querySelector(".result .textLoad");
        const removeElement = document.querySelector(".result .loader");
        
            if (resultLoadElement) {
                resultLoadElement.remove(); // Remove the loading indicator
                removeElement.remove();
                greet.style.display = "none";
            }
        })
            .catch((error) => {
                console.error('Error:', error);
        })
}

function jsonEscape(str) {
    return str.replace(new RegExp("\r?\n\n","g"),"<br>").
    replace(new RegExp("\r?\n","g"),"<br>"); 
}