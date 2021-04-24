function createInput() {

    //clear error message, form, min & max
    document.getElementById('error').innerHTML = '';
    document.getElementById('input-num').innerHTML = '';
    document.getElementById('min').innerHTML = "";
    document.getElementById('max').innerHTML = "";

    let inputNum = document.getElementById('num-added').value;
    //REGEX to check if input>=2
    const regExpression = /^[2-9]|[1-9]\d+$/;

    if (regExpression.test(inputNum)) {
        //for loop to create input fields
        for (let i = 0; i < inputNum; i++) {

            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "insertedData";
            inputField.value = "";
            document.getElementById('input-num').appendChild(inputField);
        }

        //error message
        let error = document.createElement("p");
        error.id = "invalid-num";
        document.getElementById('input-num').appendChild(error);

        //create submit button for created inputs
        let inputButton = document.createElement("button");
        inputButton.innerHTML = "Submit";
        inputButton.type = "button";
        inputButton.onclick = function getInput() {

            //clear max and min every time the form is submitted
            document.getElementById('min').innerHTML = "";
            document.getElementById('max').innerHTML = "";
            document.getElementById('invalid-num').innerHTML = "";

            //array to store inserted numbers
            let insertedNums = [];
            let inputsData = document.getElementsByName("insertedData");

            //for loop to add inserted numbers in the array
            for (var i = 0; i < inputsData.length; ++i) {
                insertedNums.push(Number(inputsData[i].value));
            }

            //REGEX to check if input is a valid number
            const regExpression = /^[-+]?\d*$/;

            //forEach to verify each element in array
            insertedNums.forEach(function (e) {
                if (!regExpression.test(e)) {
                    document.getElementById('invalid-num').innerHTML = "Please enter a valid number";
                } else {
                    //finding min and max in array with spread operator ...
                    if (regExpression.test(Math.min(...insertedNums)) && regExpression.test(Math.max(...insertedNums))) {
                        document.getElementById('min').innerHTML = "Min is " + Math.min(...insertedNums);
                        document.getElementById('max').innerHTML = "Max is " + Math.max(...insertedNums);
                    } else {
                        document.getElementById('invalid-num').innerHTML = "Please enter a valid number";
                    }
                }
            })

        };
        document.getElementById('input-num').appendChild(inputButton);

    } else {
        document.getElementById('error').innerHTML = 'Please enter a number greater than 2';
    }
}
