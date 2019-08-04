const offerController = function () {

    const createGet = function (context) {
        helper.addHeaderInfo(context);
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial('../views/offers/create.hbs')
        });
    };

    const createPost = function (context) {
        if (context.params.product 
            && context.params.description 
            && context.params.price 
            && context.params.pictureUrl) {

            const payload = {
                product: context.params.product,
                description: context.params.description,
                price: context.params.price,
                pictureUrl: context.params.pictureUrl,
                creator: sessionStorage.getItem('username'),
            };

            requester.post('offers', 'appdata', 'Kinvey', payload)
                .then(helper.handler)
                .then(() => {
                    context.redirect('#/dashboard')
                });
        } else {
            window.alert('can not have empty fields !!!')
        };

    };

    const loadDashboard = async function (context) {
        helper.addHeaderInfo(context);
        const username = sessionStorage.getItem('username');

        if (username) {
            context.loggedIn = true;
            context.username = username;

            const response = await requester.get('offers', 'appdata', 'Kinvey');
            const offers = await response.json();
            context.offers = offers;
            console.log(username);

            offers.forEach((offer) => {
                offer.isCreator = username === offer.creator;
            });

        }
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            'singleOffer': "../views/offers/singleOffer.hbs"
        }).then(function () {
            this.partial('../views/dashboard.hbs')
        });

    };

    const editGet = function (context) {
        helper.addHeaderInfo(context);
        const offerId = context.params.id;

        requester.get(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((singleOffer) => {
                context.offer = singleOffer;

                helper.loadPartials(context)
                    .then(function () {
                        this.partial('../views/offers/offerEdit.hbs')
                    });
            });
    };

    const editPost = function (context) {
        const offerId = context.params.id;
        const payload = {
            product: context.params.product,
            description: context.params.description,
            price: context.params.price,
            pictureUrl: context.params.pictureUrl,
            creator: sessionStorage.getItem('username'),
        };

        requester.put(`offers/${offerId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/dashboard')
            })
    };

    const deleteGet = function (context) {
        helper.addHeaderInfo(context);
        const offerId = context.params.id;

        requester.get(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((singleOffer) => {
                context.offer = singleOffer;

                helper.loadPartials(context)
                    .then(function () {
                        this.partial('../views/offers/offerDelete.hbs')
                    });
            });
    };

    const deletePost = function (context) {
        const offerId = context.params.id;

        requester.del(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then(() => {
                context.redirect('#/dashboard')
            })
    };

    const loadDetails = function (context) {
        const offerId = context.params.id;
        helper.addHeaderInfo(context);

        requester.get(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((offerById) => {
                context.offer = offerById;

                helper.loadPartials(context)
                    .then(function () {
                        this.partial('../views/offers/offerDetails.hbs')
                    });
            });
    };

    return {
        createGet,
        createPost,
        loadDashboard,
        editGet,
        editPost,
        deleteGet,
        deletePost,
        loadDetails,
    }
}();