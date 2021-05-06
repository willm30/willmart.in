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
};

setInterval(loopFunction, 2000);


const stateObj = {targetHeight: 1511.96};
const stateObj2 = {targetHeight: 607.537};
const project1 = document.getElementById("project1")
    const paraContainer = document.getElementById("paraContainer")
    const project1Title = document.getElementById("project1Title")
    const rootDiv = document.getElementById("root")
    const minimiserButtonCont = document.getElementById("minimiserCont")
    const minimiserButton = document.getElementById("minimiser")
    const project2 = document.getElementById("project2")
    const paraContainer2 = document.getElementById("paraContainer2")
    const project2Title = document.getElementById("project2Title")
    const minimiserButtonCont2 = document.getElementById("minimiserCont2")
    const minimiserButton2 = document.getElementById("minimiser2")
    const depixeller = (lengthInPx) => {
        let regex = /px.*/
        let nopxValue = Number(lengthInPx.replace(regex, ""))
        return nopxValue
    };

let mobileDimension = 1150
let originalWidth;
let originalHeight;
let heightIncrement;
let animationTime;
const listAnimation1 = () => {
    let currentWidth = depixeller(window.getComputedStyle(project1).width)
    let currentHeight = depixeller(window.getComputedStyle(project1).height)
    animationTime = 50
    const expander = () => {
        let targetWidth = depixeller(window.getComputedStyle(listContainer).width)
        let {targetHeight} = stateObj
        depixeller(window.getComputedStyle(paraContainer).height)
        heightIncrement = (targetHeight - currentHeight) / animationTime
        originalHeight = depixeller(window.getComputedStyle(project1).height)
        let currentWidthPercent = Math.round((currentWidth / targetWidth) * 100)
        originalWidth = currentWidth
        let targetWidthPercent = 80
        let widthPercentIncrement = (targetWidthPercent - currentWidthPercent) / animationTime
        rootDiv.style.overflowY = "auto"
        project1Title.style.border = "1px solid black"
        project1Title.style.boxShadow = "3px 3px black"
        project1Title.style.margin = "50px auto"
        project1Title.innerText = "How I Designed and Coded My Personal Website—From Scratch."
        project1Title.style.width = "80%"
        project1Title.style.fontSize = "1.1em"
        paraContainer.style.visibility = "visible"
        const animation = () => {
            if (stateObj.heightMax && stateObj.widthMax){
                project1Title.style.whiteSpace = "normal"
                clearInterval(animationInt)
                stateObj.expanded = true
                stateObj.targetHeight = depixeller(window.getComputedStyle(project1).height)
            } else {
                currentWidthPercent += widthPercentIncrement
                if (currentWidthPercent < targetWidthPercent){
                    project1.style.width = currentWidthPercent + "%"
                    } else {
                    project1.style.width = targetWidthPercent + "%"
                    stateObj.widthMax = true
                    }
                if (currentHeight < targetHeight){ 
                    currentHeight += heightIncrement
                    project1.style.height = currentHeight + "px"
                } else {
                    stateObj.heightMax = true
                    project1.style.height = "auto"
                    }
            }
        }
        project1.classList.remove("preclick")
            const animationInt = setInterval(animation, 10);
    }
    const collapser = () => {
        paraContainer.style.visibility = "hidden"
        project1Title.style.border = ""
        project1Title.style.boxShadow = ""
        project1Title.style.margin= ""
        project1Title.style.fontSize = ""
        project1Title.style.whiteSpace = ""
        project1Title.innerText = "Build My Own Website"
        project1Title.style.width = ""
        let currentHeight = depixeller(window.getComputedStyle(project1).height)
        let widthDecrement = (currentWidth - originalWidth) / animationTime
        let heightDecrement = (currentHeight - originalHeight) / animationTime
        const animation = () => {
            if (!stateObj.widthMax && !stateObj.heightMax){
                clearInterval(animationInt)
                project1.classList.add("preclick")
                stateObj.expanded = false
            } else {
                currentWidth -= widthDecrement
                if (currentWidth > originalWidth){
                    project1.style.width = currentWidth + "px"
                } else {
                    project1.style.width = originalWidth + "px"
                    stateObj.widthMax = false
                }
                currentHeight -= heightDecrement
                if (currentHeight > originalHeight){
                    project1.style.height = currentHeight + "px"
                    } else {
                        project1.style.height = originalHeight + "px"
                        stateObj.heightMax = false
                    }
                }
              
        }
        const animationInt = setInterval(animation, 10);
    }
    const expandedMobileStyles = () => {
        project1.style.width = "100%"
        project1.style.height = "auto"
        project1Title.style.border = "1px solid black"
        project1Title.style.boxShadow = "black 3px 3px"
        project1Title.style.width = "80%"
        project1Title.style.fontSize = "0.9em"
        project1Title.style.whiteSpace = "normal"
        paraContainer.style.visibility = "visible"
        minimiserButtonCont.style.margin = "30px auto"
        project1Title.innerText = "How I Designed and Coded My Personal Website—From Scratch."
        project1.classList.remove("preclick")
        stateObj.heightMax = true
        stateObj.widthMax = true
        stateObj.expanded = true
    }
    const collapsedMobileStyles = () => {
        project1.style.height = originalHeight + "px"
        project1.style.width = originalWidth + "px"
        project1Title.style.border = ""
        project1Title.style.boxShadow = ""
        project1Title.style.width = ""
        project1Title.style.fontSize = ""
        project1Title.style.whiteSpace = ""
        project1Title.innerText = "Build My Own Website"
        paraContainer.style.visibility = "hidden"
        stateObj.heightMax = false
        stateObj.widthMax = false
        stateObj.expanded = false
        if (!stateObj.touch){
            project1.classList.add("preclick")
        }
    }

if (stateObj.screenWidth > mobileDimension){
    minimiserButton.addEventListener("mousedown", e => {
        minimiserButton.style.boxShadow = "0px 0px"
        minimiserButton.style.transform = "translate(2px, 2px)"
    })
    
    window.addEventListener("mouseup", e => {
        minimiserButton.style.boxShadow = "2px 2px black"
        minimiserButton.style.transform = ""
    
    })
    if (stateObj.expanded != true){
        expander()
        document.getElementById("project1").onclick = ""
    } else {
        collapser()
        let onClickSetter = () => {
        document.getElementById("project1").onclick = listAnimation1
        }
        setTimeout(onClickSetter, animationTime)
        }
    } else {
        if (stateObj.expanded != true){
            expandedMobileStyles()
            document.getElementById("project1").onclick = ""
        } else {
            collapsedMobileStyles()
            let onClickSetter = () => {
            document.getElementById("project1").onclick = listAnimation1
            }
            setTimeout(onClickSetter, animationTime)
            }
    }
}
const listAnimation2 = () => {
    let currentWidth = depixeller(window.getComputedStyle(project2).width)
    let currentHeight = depixeller(window.getComputedStyle(project2).height)
    animationTime = 50
    const expander = () => {
        animationTime = 50
        let targetWidth = depixeller(window.getComputedStyle(listContainer).width)
        let {targetHeight} = stateObj2
        originalHeight = currentHeight
        heightIncrement = (targetHeight - currentHeight) / animationTime
        let currentWidthPercent = Math.round((currentWidth / targetWidth) * 100)
        originalWidth = currentWidth
        let targetWidthPercent = 80
        let widthPercentIncrement = (targetWidthPercent - currentWidthPercent) / animationTime
        rootDiv.style.overflowY = "auto"
        paraContainer2.style.visibility = "visible"
        project2Title.style.border = "1px solid black"
        project2Title.style.margin = "50px auto"
        project2Title.style.boxShadow = "3px 3px black"
        project2Title.style.fontSize = "1.1em"
        project2Title.innerText = "How I Became Fluent In Spanish in 2 Years"
        project2Title.style.width = "80%"
        const animation = () => {
            if (stateObj2.heightMax && stateObj2.widthMax){
                project2Title.style.whiteSpace = "normal"
                clearInterval(animationInt)
                stateObj2.expanded = true
                stateObj2.targetHeight = depixeller(window.getComputedStyle(project2).height)
            } else {
                if (currentWidthPercent < targetWidthPercent){
                    project2.style.width = currentWidthPercent + "%"
                    currentWidthPercent += widthPercentIncrement
                } else {
                    project2.style.width = targetWidthPercent + "%"
                    stateObj2.widthMax = true
                }
            if (currentHeight < targetHeight){
                project2.style.height = currentHeight + "px"
                currentHeight += heightIncrement
                } else {
                    project2.style.height = "auto";
                    stateObj2.heightMax = true
                    }
                }
        }
        project2.classList.remove("preclick")
   const animationInt = setInterval(animation, 10);
    }
    const collapser = () => {
        project2.style.height = currentHeight + "px"
        paraContainer2.style.visibility = "hidden"
        project2Title.style.border = ""
        project2Title.style.boxShadow = ""
        project2Title.style.margin= ""
        project2Title.style.fontSize = ""
        project2Title.style.whiteSpace = ""
        project2Title.innerText = "Acquire Spanish to C2"
        project2Title.style.width = ""
        let widthDecrement = (currentWidth - originalWidth) / animationTime
        let heightDecrement = (currentHeight - originalHeight) / animationTime
        const animation = () => {
            if (!stateObj2.widthMax && !stateObj2.heightMax){
                project2.classList.add("preclick")
                clearInterval(animationInt)
                stateObj2.expanded = false
            } else {
                currentWidth -= widthDecrement
                if (currentWidth > originalWidth){
                    project2.style.width = currentWidth + "px"
                } else {
                    project2.style.width = originalWidth + "px"
                    stateObj2.widthMax = false
                }
                currentHeight -= heightDecrement
                if (currentHeight > originalHeight){
                    project2.style.height = currentHeight + "px"
                    
            } else {
                project2.style.height = originalHeight + "px"
                stateObj2.heightMax = false
            }
        }
    }
  const animationInt = setInterval(animation, 10);
}
const expandedMobileStyles = () => {
    project2.style.width = "100%"
    project2.style.height = "auto"
    project2Title.style.border = "1px solid black"
    project2Title.style.boxShadow = "black 3px 3px"
    project2Title.style.width = "80%"
    project2Title.style.fontSize = "0.9em"
    project2Title.style.whiteSpace = "normal"
    project2Title.innerText = "How I Became Fluent In Spanish in 2 Years"
    paraContainer2.style.visibility = "visible"
    project2.classList.remove("preclick")
    stateObj2.heightMax = true
    stateObj2.widthMax = true
    stateObj2.expanded = true
}
const collapsedMobileStyles = () => {
    project2.style.height = originalHeight + "px"
    project2.style.width = originalWidth + "px"
    project2Title.style.border = ""
    project2Title.style.boxShadow = ""
    project2Title.style.width = ""
    project2Title.style.fontSize = ""
    project2Title.style.whiteSpace = ""
    project2Title.innerText = "Acquire Spanish to C2"
    paraContainer2.style.visibility = "hidden"
    stateObj2.heightMax = false
    stateObj2.widthMax = false
    stateObj2.expanded = false
    if (!stateObj2.touch){
        project2.classList.add("preclick")
    }
}


if (stateObj2.screenWidth > mobileDimension){
    minimiserButton2.addEventListener("mousedown", e => {
        minimiserButton2.style.boxShadow = "0px 0px"
        minimiserButton2.style.transform = "translate(2px, 2px)"
    })
    
    window.addEventListener("mouseup", e => {
        minimiserButton2.style.boxShadow = "2px 2px black"
        minimiserButton2.style.transform = ""
    
    })
    if (stateObj2.expanded != true){
        expander()
        document.getElementById("project2").onclick = ""
    } else {
        collapser()
        let onClickSetter = () => {
        document.getElementById("project2").onclick = listAnimation2
        }
        setTimeout(onClickSetter, 50)
        }
    } else {
        if (stateObj2.expanded != true){
            expandedMobileStyles()
            document.getElementById("project2").onclick = ""
        } else {
            collapsedMobileStyles()
            let onClickSetter = () => {
            document.getElementById("project2").onclick = listAnimation2
            }
            setTimeout(onClickSetter, animationTime)
            }
    }
}
const targetDimensionsSetter = () => {
    let screenWidth = document.getElementById("screenWidth")
    screenWidth.innerText = window.innerWidth
    stateObj.screenWidth = window.innerWidth
    stateObj2.screenWidth = window.innerWidth
    let listContainerWidth = window.getComputedStyle(listContainer).width
    if (stateObj.expanded){
        stateObj.targetHeight = depixeller(window.getComputedStyle(project1).height)
        if (window.innerWidth > mobileDimension){
            project1.style.width = "80%"
            project1.style.height = "auto"
            project1Title.style.border = "1px solid black"; 
            project1Title.style.boxShadow = "black 3px 3px"; 
            project1Title.style.width = "80%"; 
            project1Title.style.margin = "50px auto"
            project1Title.style.fontSize =  "1.1em"; 
            project1Title.style.whiteSpace = "normal";
            paraContainer.style.visibility = "visible";
        } else{
            project1.style.width="100%"
            project1Title.style.fontSize =  "0.9em";
            project1Title.style.margin = ""
        }
    }
    if (stateObj2.expanded){
        stateObj2.targetHeight = depixeller(window.getComputedStyle(project2).height)
        if (window.innerWidth > mobileDimension){
            project2.style.width = "80%"
            project2.style.height = "auto"
            project2Title.style.border = "1px solid black"; 
            project2Title.style.boxShadow = "black 3px 3px"; 
            project2Title.style.margin = "50px auto"
            project2Title.style.width = "80%"; 
            project2Title.style.fontSize =  "1.1em"; 
            project2Title.style.whiteSpace = "normal";
            paraContainer2.style.visibility = "visible";
        } else {
            project2.style.width="100%"
            project2Title.style.fontSize =  "0.9em";
            project2Title.style.margin = ""
        }
    }
} 
const originalDimensionsLoader = () => {
    originalHeight = depixeller(window.getComputedStyle(project1).height)
    let currentWidth = depixeller(window.getComputedStyle(project1).width)
    originalWidth = currentWidth
}
const touchDevices = () => {
    project1.classList.remove("preclick")
    project2.classList.remove("preclick")
}
const touchState = () => {
    stateObj.touch = true;
    stateObj2.touch = true;
    window.removeEventListener("touchstart", touchState)
}
window.onload = originalDimensionsLoader()
window.onload = targetDimensionsSetter()
window.addEventListener("resize", targetDimensionsSetter)
window.addEventListener("touchstart", touchState)