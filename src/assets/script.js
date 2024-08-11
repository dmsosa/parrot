const inputs = document.querySelectorAll(".input-color");
function changeColor(event) {
    const id = event.currentTarget.id;
    const targetSelector = "." + id.replace("-color", "");
    const stylesheet = document.styleSheets[0];
    const ruleToChange = [...stylesheet.cssRules].find(
        (rule) => rule.selectorText === targetSelector
    );
    if (targetSelector.includes("color-wing")) {
        ruleToChange.style.setProperty("border-color", `${event.currentTarget.value} transparent transparent transparent`) ;
    } else {
        ruleToChange.style.setProperty("background-color", `${event.currentTarget.value}`) ;
    }
}
for ( let i = 0; i < inputs.length ; i++ ) {
    
    var input = inputs[i];
    input.addEventListener("input", changeColor);
}