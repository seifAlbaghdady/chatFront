
function Message(){
    const name = "";
    if(name)
        return <h1>Hi, I'm a {name}</h1>
    return <h1>Hi, I'm a guest</h1>
}

export default Message;