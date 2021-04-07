const xmpp = require("simple-xmpp");

// when hit the event online make this 
xmpp.on("online", data => {
    console.log("hey i am online ");
    console.log(`connected as ${data.jid.user}`);
    send();
});

function send() {
    setTimeout(send, 5000);
    xmpp.send("foushware@localhost", `hi ${Date.now()}`);
}
xmpp.on("error", error => console.log(`something went wrong! ${error}`))

xmpp.on("chat", (from, message) => {
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    // jid => the id of the sender  admin => is the user  localhost => is the domain of the xmpp server
    "jid": "admin@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222
});