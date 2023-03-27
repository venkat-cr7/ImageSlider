(function(){

    const pictures = [ 
        "LinkedINpic",
        "githubIMG",
        "tindog",
        "dumkit",
        "movieland"
    ];

    let buttons = document.querySelectorAll(".btn");
    let imgDiv = document.querySelector(".img-container");
    
    let counter = 0;

    buttons.forEach(function(button){

        button.addEventListener("click", function(e){

            if(button.classList.contains("btn-left")){
                counter--;
                if(counter < 0){
                    counter = pictures.length - 1 ;
                }
                imgDiv.style.background = `url("images/${pictures[counter]}.png")`
            }
            if(button.classList.contains("btn-right")){
                counter++;
                if(counter > pictures.length - 1){
                    counter = 0;
                }
                imgDiv.style.background = `url("images/${pictures[counter]}.png")`
            }

        });

    });


})();