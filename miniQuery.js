var SweetSelector = (function(){

  var getById = function(elementId){
    return document.getElementById(elementId)
  }

  var getByClass = function(elementClass){
    return document.getElementsByClassName(elementClass)
  }

  var getByTag = function(elementTag){
    return document.getElementsByTagName(elementTag)
  }

  var select = function(element){
    if (element.includes('#')){
      var newElement = element.slice(1)
      return getById(newElement);
    }
    else if (element.includes('.')){
      var newElement = element.slice(1)
      return getByClass(newElement)
    }
    else {
      return getByTag(element)
    }
  }
  return {
    select: select
  }
})();

var DOM = (function(){

  var hide = function(element){
    //input: element's id, class or tagname
    //output: hide the DOM element passed in
    //1. Use sweetselector to grab the element
    //2. save element to variable
    //3. update the css of the element to have display: none
    SweetSelector.select(element)[0].style.display = "none";
  }

  var show = function(element){
    //input: element's id, class or tagname
    //output: show the DOM element passed in
    SweetSelector.select(element)[0].style.display = "";
  }

  var addClass = function(targetClass, classToAdd){
    //input: class to target, class to add
    //output: updated class for selected element
    var newTargetClass = targetClass.slice(1)
    SweetSelector.select(targetClass)[0].className = newTargetClass + " " + classToAdd
  }

  var removeClass = function(targetClass, classToRemove){
    var numOfElements = SweetSelector.select(targetClass).length
    for (var i = 0; i <= numOfElements; i++){
      SweetSelector.select(targetClass)[0].classList.remove(classToRemove)
    }
  }

  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }

})();

var EventDispatcher = (function (){

  var on = function(element, event, callback){
    // input: triggering element, event, callback function based on that event
    // output: awesome (result of the callback function)
   return SweetSelector.select(element)[0].addEventListener(event, callback)
  }

  var trigger = function(element, event){
    return SweetSelector.select(element)[0].dispatchEvent(event)
  }

  return{
    on: on,
    trigger: trigger
  }
})();








