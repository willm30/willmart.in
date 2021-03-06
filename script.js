const titleLoop = () => {
    const jobTitle = document.getElementById("jobTitle");
    const titleArray = ["Developer", "Designer", "Writer"];

    let i = 0;
    const loopFunction = () => {
        if (i < 3){    
        jobTitle.innerText = titleArray[i]
            i += 1   
        } else {
            i = 0
            jobTitle.innerText = titleArray[i]
            i += 1
        }
    }
    setInterval(loopFunction, 2000);
}

const touchDevice = {}
const animationTime = 50
const targetWidthPercent = 80;
const mobileDimension = 1150;
const rootDiv = document.getElementById("root")
const titlesArray = ["How I Designed and Coded My Personal Website—From Scratch", "How I Became Fluent In Spanish in 2 Years"]
const stylesObject = {
    rootDiv: {
        overflowY: "auto"
    },
    listItem: {
        width: "80%",
        mobile: {
            width: "100%",
            height: "auto"
        }
    },
    title: {
        border: "1px solid black",
        fontSize: "1.4em",
        fontFamily: "'Oswald', sans-serif",
        boxShadow: "3px 3px black",
        margin: "50px auto",
        width:"80%",
        mobile: {
            fontSize: "0.9em",
            whiteSpace: "normal",
            margin: "25px auto"
        }
    },
    paraContainer: {
        visibility: "visible"
    },
    minimiser: {
        mobile: {
            margin: "25px auto"
        }
    }

}


const listItemAnimation = (projectID) => {
    const listItem = document.getElementById(projectID)
    const title = listItem.childNodes[1]
    const paraContainer = listItem.childNodes[3]
    const minimiser = paraContainer.getElementsByTagName("button")[0]
    const stateObject = {}
    const collapsedTitle = listItem.childNodes[1].innerText
    let currentWidthPercent;
    let widthCurrent;
    let widthTarget;
    let widthIncrement;
    let widthDecrement;
    let heightCurrent;
    let heightTarget;
    let heightIncrement;
    let heightDecrement;
    let originalWidth;
    let originalHeight;
    let timeRemaining = animationTime
    let animationInt;

    const titleGetter = () => {
        let numberRegex = /\d+/
        let number = projectID.match(numberRegex)
        let index = Number(number[0]) - 1
        return titlesArray[index]
    }
    const depixeller = (lengthInPx) => {
        let regex = /px.*/
        let nopxValue = Number(lengthInPx.replace(regex, ""))
        return nopxValue
    };
    const getDimensions = (property) => {
            if (property == 'width'){
                widthCurrent = depixeller(window.getComputedStyle(listItem).width)
                widthTarget = depixeller(window.getComputedStyle(listContainer).width)
                currentWidthPercent = Math.round((widthCurrent / widthTarget) * 100)
                widthIncrement = (targetWidthPercent - currentWidthPercent) / animationTime
                widthDecrement =  (widthCurrent - originalWidth) / animationTime
            } else if (property == 'height'){
                heightCurrent = depixeller(window.getComputedStyle(listItem).height)
                heightTarget = depixeller(window.getComputedStyle(paraContainer).height)
                heightIncrement = (heightTarget - heightCurrent) / timeRemaining
                heightDecrement = (heightCurrent - originalHeight) / animationTime
                timeRemaining -= 1
            }
    }
    const styleSetter = (element, property, value, unit = "") => {
        eval('element.style.' + property + '="' + value + unit + '"')  
        }
    
    const expander = () => {
        getDimensions("width")
        getDimensions("height")
        rootDiv.style.overflowY = stylesObject.rootDiv.overflowY
        title.style.border = stylesObject.title.border
        title.style.boxShadow = stylesObject.title.boxShadow
        title.style.margin = stylesObject.title.margin
        title.style.fontFamily = stylesObject.title.fontFamily
        title.innerText = titleGetter()
        title.style.width = stylesObject.title.width
        title.style.fontSize = stylesObject.title.fontSize
        paraContainer.style.visibility = stylesObject.paraContainer.visibility
        originalWidth = widthCurrent
        originalHeight = heightCurrent
    const animator = () => {
        if (stateObject.heightMax && stateObject.widthMax){
            styleSetter(title, "whiteSpace", "normal")
            clearInterval(animationInt)
            stateObject.expanded = true
            stateObject.targetHeight = depixeller(window.getComputedStyle(listItem).height)
        } else {
            currentWidthPercent += widthIncrement
            if (currentWidthPercent < targetWidthPercent){
                styleSetter(listItem, "width", currentWidthPercent, "%")
            } else {
                styleSetter(listItem, "width", targetWidthPercent, "%")
                stateObject.widthMax = true
            }
        }
        getDimensions("height")
        if (heightCurrent < heightTarget){
            heightCurrent += heightIncrement
            styleSetter(listItem, "height", heightCurrent, "px")
        } else {
            stateObject.heightMax = true
            styleSetter(listItem, "height", "auto")
        }
        }
    listItem.classList.remove("preclick")

    if (window.innerWidth > mobileDimension){
            animationInt = setInterval(animator, 10)
            listItem.onclick = ""
            minimiser.onclick = collapser
    } else {
            expandedMobileStyles()
            listItem.onclick = ""
            minimiser.onclick = collapsedMobileStyles
    }
    }
    const collapser = () => {
        paraContainer.style.visibility = "hidden"
        title.style.border = ""
        title.style.boxShadow = ""
        title.style.margin= ""
        title.style.fontSize = ""
        title.style.fontFamily = ""
        title.style.whiteSpace = ""
        title.innerText = collapsedTitle
        title.style.width = ""
        getDimensions("height")
        getDimensions("width")
        const animation = () => {
            if (!stateObject.widthMax && !stateObject.heightMax){
                clearInterval(animationInt)
                listItem.classList.add("preclick")
                listItem.onclick = listItemAnimation.bind(listItem, projectID)
                stateObject.expanded = false
            } else {
                widthCurrent -= widthDecrement
                if (widthCurrent > originalWidth){
                    listItem.style.width = widthCurrent + "px"
                } else {
                    listItem.style.width = originalWidth + "px"
                    stateObject.widthMax = false
                }
                heightCurrent -= heightDecrement
                if (heightCurrent > originalHeight){
                    listItem.style.height = heightCurrent + "px"
                } else {
                    listItem.style.height = originalHeight + "px"
                    stateObject.heightMax = false
                }
            }
        }
        const animationInt = setInterval(animation, 10);
    }
    const expandedMobileStyles = () => {
        getDimensions("width")
        getDimensions("height")
        originalWidth = widthCurrent
        originalHeight = heightCurrent
        listItem.style.width = stylesObject.listItem.mobile.width
        listItem.style.height = stylesObject.listItem.mobile.height
        title.style.fontSize = stylesObject.title.mobile.fontSize
        title.style.whiteSpace = stylesObject.title.mobile.whiteSpace
        title.style.margin = stylesObject.title.mobile.margin
        minimiser.style.margin = stylesObject.minimiser.mobile.margin
        listItem.classList.remove("preclick")
        title.innerText = titleGetter()
        stateObject.heightMax = true
        stateObject.widthMax = true
        stateObject.expanded = true
    }
    const collapsedMobileStyles = () => {
        listItem.style.height = originalHeight + "px"
        listItem.style.width = originalWidth + "px"
        title.style.border = ""
        title.style.boxShadow = ""
        title.style.width = ""
        title.style.fontSize = ""
        title.style.fontFamily = ""
        title.style.whiteSpace = ""
        title.style.margin = ""
        title.innerText = collapsedTitle
        paraContainer.style.visibility = "hidden"
        minimiser.style.margin = ""
        stateObject.heightMax = false
        stateObject.widthMax = false
        stateObject.expanded = false
        if (!touchDevice.touch){
            listItem.classList.add("preclick")
        }
        const onClickSetter = () => {
        listItem.onclick = listItemAnimation.bind(listItem, projectID)
        }
        setTimeout(onClickSetter, animationTime)
    }

    if (stateObject.expanded != true){
            expander()
        } 

    const resizeEvent = () => {
        minimiser.onclick = ""
        if (window.innerWidth < mobileDimension){
            if (stateObject.expanded){
                minimiser.onclick = collapsedMobileStyles
                listItem.style.width= stylesObject.listItem.mobile.width
                title.style.fontSize =  stylesObject.title.mobile.fontSize
                title.style.margin = stylesObject.title.mobile.margin
                minimiser.style.margin = stylesObject.minimiser.mobile.margin
            } 
        } else {
            if (stateObject.expanded){
                minimiser.onclick = collapser
                listItem.style.width = stylesObject.listItem.width;
                title.style.margin = stylesObject.title.margin;
                title.style.fontSize =  stylesObject.title.fontSize; 
                minimiser.style.margin = ""
            } 
        }
    }
    const buttonPress = () => {
        minimiser.style.boxShadow = "0px 0px"
        minimiser.style.transform = "translate(2px, 2px)"
    }
    const buttonRelease = () => {
        minimiser.style.boxShadow = "2px 2px black"
        minimiser.style.transform = ""
    }
    
    minimiser.addEventListener("mousedown", buttonPress)
    window.addEventListener("mouseup", buttonRelease)  
    window.addEventListener("resize", resizeEvent)

    if (touchDevice.touch){
        minimiser.removeEventListener("mousedown", buttonPress)
        window.removeEventListener("mouseup", buttonRelease)
    }
}



const touchState = () => {
    touchDevice.touch = true
    window.removeEventListener("touchstart", touchState)
}

window.addEventListener("touchstart", touchState)
window.onload = titleLoop()
