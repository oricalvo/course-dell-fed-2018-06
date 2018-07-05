(function(navigate) {
    let page;
    let input;

    init();

    function init() {
        page = common.selectElement(".page-add");

        page.data("controller", {
            render: render
        });

        input = common.selectElement("input", page);

        const button = common.selectElement("button", page);
        button.on("click", onButtonSave);
    }

    function render() {
        input.val("");
        input.focus();
    }

    function onButtonSave() {
        const name = input.val();
        if(!name) {
            return;
        }

        const contact = {id:-1, name: name};
        contacts.push(contact);

        navigate("home");
    }
})(common.navigate);
