function shout(hello){
    return hello.toUpperCase();
}
function whisper(secret){
    return secret.toLowerCase();
}
function logShout(word){
    console.log(word.toUpperCase());
}
function logWhisper(secret){
    console.log(secret.toLowerCase());
}
function sayHiToHeadphonedRoommate(word){
    if(word.toLowerCase() === word){
        return "I can\'t hear you!"
    }
    else if(word.toUpperCase() === word){
        return "YES INDEED!";
    }
    else if(word === "Let's have dinner together!"){
        return "I would love to!";
    }
}