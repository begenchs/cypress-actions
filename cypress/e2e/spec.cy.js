describe('Page loads', () => {
  beforeEach(() => {
    const movieListURL =
      'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=3ced43f6e96d3d341f62d11cdf4e3f93';

    const configURL = 'https://api.themoviedb.org/3/configuration?api_key=3ced43f6e96d3d341f62d11cdf4e3f93';

    cy.intercept(movieListURL, {
      fixture: 'movieList',
    });
    cy.intercept(configURL, {
      fixture: 'config',
    });

    cy.visit('http://localhost:3000');
    cy.login();
  });

  it('Page Loads', () => {
    cy.contains('Filter');

    cy.findAllByTestId('movies-list-movie')
      .first()
      .then(($movie) => {
        const movie_URL = $movie.attr('href');
        cy.findAllByTestId('movies-list-movie').first().click();
        cy.url().should('include', movie_URL);
      });

    expect(true).to.equal(true);
  });

  it('Correct number of movies', () => {
    cy.findAllByTestId('movies-list-movie').should('have.length', 20);
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('SearchClick', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear('S');
    cy.get('input').type('Beas');
    cy.get('img').click();
    /* ==== End Cypress Studio ==== */
  });

  it('Using fixtures', () => {
    cy.fixture('movieList').then((jsonData) => {
      console.log('jsonData', jsonData.results[0].title);
      expect(jsonData.results[0].title).to.eq('Orphan: First Kill');
    });
  });
});
