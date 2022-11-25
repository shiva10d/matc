

export default function Validation(inputText:any) {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
     console.log('if--->')
    }else{
        console.log('else--->')   
    }
}
