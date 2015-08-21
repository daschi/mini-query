var SweetSelector = (function(){
  // var idRegex = /^\D+#/

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
})()

