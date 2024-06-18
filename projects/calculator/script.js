document.addEventListener("DOMContentLoaded", function() {
    
    const buttons = document.querySelectorAll(".grid-button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const action = button.dataset.action;
            handleButtonClick(action);
        });
    });

    function handleButtonClick(action) {
        const header = document.getElementById("header");
        const lastChar = header.textContent[header.textContent.length - 1];
        const isDigit = /\d/.test(lastChar);

        switch(action) {
            case "print7":
                header.textContent = header.textContent + "7";
                break;
            case "print8":
                header.textContent = header.textContent + "8";
                break;
            case "print9":
                header.textContent = header.textContent + "9";
                break;
            case "divides":
                if (isDigit) {
                    header.textContent = header.textContent + " / ";
                }
                break;
            case "print4":
                header.textContent = header.textContent + "4";
                break;
            case "print5":
                header.textContent = header.textContent + "5";
                break;
            case "print6":
                header.textContent = header.textContent + "6";
                break;
            case "times":
                if (isDigit) {
                    header.textContent = header.textContent + " * ";
                }
                break;
            case "print1":
                header.textContent = header.textContent + "1";
                break;
            case "print2":
                header.textContent = header.textContent + "2";
                break;
            case "print3":
                header.textContent = header.textContent + "3";
                break;
            case "minus":
                if (isDigit) {
                    header.textContent = header.textContent + " - ";
                }
                break;
            case "erase":
                header.textContent = "";
                break;
            case "print0":
                if (header.textContent.length > 0) {
                    header.textContent = header.textContent + "0";
                }
                break;
            case "equals":
                if (isDigit) {
                    const current = header.textContent;
                    calculate(current);
                }
                break;
            case "plus":
                if (isDigit) {
                    header.textContent = header.textContent + " + ";
                }
                break;
        }
    }
});

function calculate(exp) {
    let arr = exp.split(" ");
    let str = "";
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    
    let result;
    try {
        result = eval(str);
    } catch (e) {
        console.error("Error", e);
        result = "Error";
    }
    
    let = document.getElementById("header");
    header.textContent = result;
}   