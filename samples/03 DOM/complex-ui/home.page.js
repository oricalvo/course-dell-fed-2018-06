(function() {
    let page;
    let ul;
    let template;

    init();

    function init() {
        page = common.selectElement(".page-home");

        page.data("controller", {
            render: render
        });

        ul = common.selectElement("ul", page);
        template = $("li", page);

        const buttonAdd = common.selectElement("button.add", page);
        buttonAdd.on("click", onButtonAddClicked);

        template.remove();

        render();
    }

    function render() {
        ul.empty();

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

    function onButtonAddClicked() {
        common.navigate("add");
    }
})();
