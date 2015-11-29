# dyncss
A node module to assist in dynamic css generation

The basic idea is that node modules that generate HTML should also generate associated CSS.  
With this generation comes the ability to dynamacally change the CSS with state.

Each node module that has associated HTML and CSS has its css placed into a separate stylesheet
using a simple naming convention.

Typical usage:
```
    var setStyleSheet = require('dyncss');
    setStyleSheet('myStyleSheetIdPrefix', '{ body: background-color:pink; }\n');
```
This call will result in HTML code like this:
```
  <head>
    <style type="text/css" id="myStyleSheetIdPrefixStyleSheet">
    { body: background-color:pink; }
    </style>
  ...
```
If the style block doesn't already exist is is created and appended to the head tag. 
If the block already exists, its contents is replaced.