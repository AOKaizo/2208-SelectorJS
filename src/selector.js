// YOUR CODE HERE

class $ {
  constructor(CSSId) {
    let preppedId = document.getElementById(CSSId.slice(1));
    let storedId = [preppedId];
    let preppedClass = document.getElementsByClassName(CSSId.slice(1));
    let storedClass = [...preppedClass];
    let preppedTag = document.getElementsByTagName(CSSId);
    let storedTag = [...preppedTag];
    if (CSSId.includes(".")) {
      let preppedTag = document.getElementsByTagName(
        CSSId.slice(0, CSSId.indexOf("."))
      );
      storedTag = [...preppedTag].filter(
        (element) => element.className === CSSId.slice(CSSId.indexOf(".") + 1)
      );
    }
    if (CSSId[0] === ".") {
      this.elements = storedClass;
    } else if (CSSId[0] === "#") {
      this.elements = storedId;
    } else {
      this.elements = storedTag;
    }
  }

  hide() {
    this.elements.forEach((element) => (element.style.display = "none"));
    return this;
  }

  show() {
    this.elements.forEach((element) => (element.style.display = "inherit"));
    return this;
  }
  addClassName(classToAdd) {
    this.elements.forEach((element) => (element.classList = classToAdd));
    return this;
  }

  removeClassName(classToRemove) {
    this.elements.forEach((element) => element.classList.remove(classToRemove));
    return this;
  }

  text(textToAdd) {
    this.elements.forEach((element) => (element.innerText = textToAdd));
    return this;
  }

  addChild(nodeToAdd) {
    this.elements.forEach((element) =>
      element.appendChild(document.createElement(nodeToAdd))
    );
    return this;
  }
}

// Pure Constructor Version

// function $(CSSId) {
//     let preppedId = document.getElementById(CSSId.slice(1));
//     let storedId = [preppedId];
//     let preppedClass = document.getElementsByClassName(CSSId.slice(1));
//     let storedClass = [...preppedClass];
//     let preppedTag = document.getElementsByTagName(CSSId);
//     let storedTag = [...preppedTag];
//     if (CSSId.includes(".")) {
//       let preppedTag = document.getElementsByTagName(
//         CSSId.slice(0, CSSId.indexOf("."))
//       );
//       storedTag = [...preppedTag].filter((element) =>
//         element.includes(
//           CSSId.slice(CSSId.findIndex((element) => element === ".") + 1)
//         )
//       );
//       console.log(storedTag);
//     }
//     if (CSSId[0] === ".") {
//       this.elements = storedClass;
//     } else if (CSSId[0] === "#") {
//       this.elements = storedId;
//     } else {
//       this.elements = storedTag;
//     }
//     this.hide = () => {
//       this.elements.forEach((element) => (element.style.display = "none"));
//       return this;
//     };

//     this.show = () => {
//       this.elements.forEach((element) => (element.style.display = "inherit"));
//       return this;
//     };

//     this.addClassName = (classToAdd) => {
//       this.elements.forEach((element) => (element.classList = classToAdd));
//       return this;
//     };

//     this.removeClassName = (classToRemove) => {
//       this.elements.forEach((element) => element.classList.remove(classToRemove));
//       return this;
//     };

//     this.text = (textToAdd) => {
//       this.elements.forEach((element) => (element.innerText = textToAdd));
//       return this;
//     };

//     this.addChild = (nodeToAdd) => {
//       this.elements.forEach((element) =>
//         element.appendChild(document.createElement(nodeToAdd))
//       );
//       return this;
//     };
//   }
