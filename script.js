//your JS code here. If required.
function handleInput(input, event) {
    const maxLength = parseInt(input.getAttribute("maxlength"));
    const inputValue = input.value;

    if (inputValue.length === maxLength) {
        const nextInput = input.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    } else if (inputValue.length === 0 && event.inputType === "deleteContentBackward") {
        const prevInput = input.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
        }
    }
}
function handleInput(input, event) {
    const maxLength = parseInt(input.getAttribute("maxlength"));
    const inputValue = input.value;

    if (inputValue.length === maxLength) {
        const nextInput = input.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    } else if (inputValue.length === 0 && event.inputType === "deleteContentBackward") {
        const prevInput = input.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
        }
    }
}
