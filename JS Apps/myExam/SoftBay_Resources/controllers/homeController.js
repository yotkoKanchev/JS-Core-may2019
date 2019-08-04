const homeController = function () {

    const getHome = async function (context) {

        helper.addHeaderInfo(context);

        if (context.loggedIn) {
            let res = await requester.get('offers', 'appdata', 'Kinvey');
            let offers = await res.json();
            
            context.offers = offers; 
        };

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            recipe: "./views/offers/singleOffer.hbs"
        }).then(function () {
            this.partial('./views/home.hbs')
        });
    };

    return {
        getHome
    }
}();