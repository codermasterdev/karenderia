// 1. String.prototype.trim polyfill
if (!"".trim) String.prototype.trim = function(){ return this.replace(/^[\sï»¿]+|[\sï»¿]+$/g, ''); };