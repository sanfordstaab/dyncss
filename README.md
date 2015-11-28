# dyncss
node module to assist in dynamic css generation

The basic idea is that node modules that generate HTML should also generate associated CSS.  
With this generation comes the ability to dynamacally change the CSS with state.

Each node module that has associated HTML and CSS has its css placed into a separate <style> block
using a simple convention: [name] + 'StyleSheet' is the id of that CSS sheet.
