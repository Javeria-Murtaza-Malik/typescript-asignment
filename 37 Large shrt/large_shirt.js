//large sirts :modify the make shirt ()functon so that shirts are large by default with a
//message that reads i love typescript.
//Make a large shirt and a medium shirt with default message ,and message ,and ashir any size
//with different message
function make_shirt(size_, text) {
    if (size_ === void 0) { size_ = 'large'; }
    if (text === void 0) { text = 'I Love typescript'; }
    console.log("creating a ".concat(size_, "shirt with the message :").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I Love python');
