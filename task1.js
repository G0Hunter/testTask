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
