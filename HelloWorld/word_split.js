function main(params){
    var text = params.payload || "Lorem ipsum";
    var arr_text = text.split(" ");
    return {payload : arr_text};
}
