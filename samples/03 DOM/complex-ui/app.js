const contacts = [
    {"id": 1, "name": "Ori"},
    {"id": 2, "name": "Roni"},
    {"id": 3, "name": "Udi"}
];

main();

function main() {
    const ul = $("ul");

    const template = $("li");
    template.remove();

    for(const contact of contacts) {
        const li = template.clone();

        const span = li.find("span");
        span.text(contact.name);

        const button = li.find("button");
        button.on("click", function() {
            const index = contacts.indexOf(contact);
            if(index != -1) {
                contacts.splice(index, 1);
            }

            li.remove();
        });

        ul.append(li);
    }
}
