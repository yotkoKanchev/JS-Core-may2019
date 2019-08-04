window.onload = () => {
    Sammy("#rooter", function () {
        // can pass only body here 

        this.use('Handlebars', 'hbs');

        // Home
        this.get('/', homeController.getHome);
        this.get('#/home', homeController.getHome); //Optional

        // User
        this.get('#/login', userController.getLogin);
        this.get('#/register', userController.getRegister);

        this.post('#/register', userController.postRegister);
        this.post('#/login', userController.postLogin);
        this.get('#/logout', userController.logout);

        // Offer
        this.get('#/offer/create', offerController.createGet);
        this.post('#/offer/create', offerController.createPost);
        this.get('#/dashboard', offerController.loadDashboard);

        this.get('#/offer/edit/:id', offerController.editGet);
        this.post('#/offer/edit/:id', offerController.editPost);

        this.get('#/offer/delete/:id', offerController.deleteGet);
        this.post('#/offer/delete/:id', offerController.deletePost);

        this.get('#/offer/details/:id', offerController.loadDetails)



        // Recipe
        // this.get('#/recipe/create', recipeController.createGet); ////
        // this.post('#/recipe/create', recipeController.createPost); ////
        // this.get('#/recipe/details', recipeController.loadDetails)
        // // Movie
        // this.get('#/movie/create', movieController.createGet);
        // this.post('#/movie/create', movieController.createPost);
        // this.get('#/movie/user', movieController.myMovies);
        // this.get('#/movie/edit/:id', movieController.editGet);///
        // this.post('#/movie/edit/:id', movieController.editPost);///
        // // if it is form - PUT method should be POST :
        // this.get('#/movie/delete/:id', movieController.deleteGet); ////
        // this.post('#/movie/delete/:id', movieController.deletePost); ////
        // this.get('#/movie/details/:id', movieController.loadDetails);
        // this.get('#/movie/buy/:id', movieController.buyTicket);



        //Events
        // this.get('#/createEvent', eventController.getCreateEvent);
        // this.get("#/eventDetails/:eventId", eventController.getDetailsEvent);
        // this.get('#/editEvent/:eventId', eventController.getEditEvent);
        // this.get('#/deleteEvent/:eventId', eventController.postDeleteEvent)

        // this.post('#/createEvent', eventController.postCreateEvent);
        // this.post('#/editEvent/:eventId', eventController.postEditEvent);

    }).run('/');
};