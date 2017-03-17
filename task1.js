function def(some){
      return some !== undefined && some !== null
}
/////////
 Node.prototype.attach = function(node) {
            return this.appendChild(node);
 }
\\\\\\\\\\
var detach = function(no) {
 if (no && no.parentNode )
 		return no.parentNode.removeChild(no);
}
\\\\\\\\\\\\\\\
Node.prototype.getChildren = function() {
var arrNode = [];
for (var i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i].nodeType == 1)
      arrNode.push(this.childNodes[i]);
    }
    return arrNode;
}
\\\\\\\\\\\\\\\
Node.prototype.insAfter = function(node) {
  if( !def(this.parentNode) || !def(this.nextSibling)){
       return;
  }
  else{
       return this.parentNode.insertBefore(node, this.nextSibling);
   }
} 
\\\\\\\\\\\\\\\
Node.prototype.insBefore = function(node) {
		if(def(this.parentNode))
  		      return this.parentNode.insertBefore(node, this);
}
\\\\\\\\\\\\\\\

function ajax_get(url) {
    xmlhttp = new XMLHttpRequest();
    var global= [];
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            var result =JSON.parse(xmlhttp.responseText);
            var fields = result.fields[0];
            var data = result.data;
            for(var j = 0; j < data.length; j++) {
                var obj = {};
                var dataCur = result.data[j];
                for (var i = 0; i < dataCur.length; i++) {
                    obj[fields[i+1]] = dataCur[i];
                };
                global.push(obj);
            }
        }
    };
    xmlhttp.open("GET", url);
    xmlhttp.send();
    return global;
}
ajax_get();
