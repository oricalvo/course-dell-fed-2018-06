const common = (function() {
    const pages = $(".page");
    let activePage = null;

    pages.hide();

    function selectElement(selector, parent) {
        const res = $(selector, parent);
        if (!res.length) {
            throw new Error("Selector: " + selector + " was not found");
        }

        return res;
    }

    function navigate(pageName) {
        for (const page of pages) {
            const $page = $(page);
            if ($page.hasClass("page-" + pageName)) {
                if (activePage) {
                    activePage.hide();
                }

                $page.show();

                const controller = $page.data("controller");
                if(controller && controller.render) {
                    controller.render();
                }

                activePage = $page;

                break;
            }
        }
    }

    return {
        navigate,
        selectElement,
    }
})();
