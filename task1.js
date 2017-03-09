function def(some){
      return some !== undefined && some !== null
}
console.log(def());
/////////
 Node.prototype.attach = function(node) {
            return this.appendChild(node);
 }
console.log(document.getElementById('list').attach(someNode));
\\\\\\\\\\
 Node.prototype.detach = function() {
           return this.parentNode.removeChild(this)
 }
console.log(document.getElementById('k').detach());
\\\\\\\\\\\\\\\
Node.prototype.getChildren = function() {
var arrNode = [];
for (var i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i].nodeType == 1)
      arrNode.push(this.childNodes[i]);
    }
    return arrNode;
}
console.log(document.getElementById('list').getChildren());
\\\\\\\\\\\\\\\

\\\\\\\\\\\\\\\

\\\\\\\\\\\\\\\
