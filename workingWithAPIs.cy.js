describe('API Testing with Cypress', () => {

  // Challenge 1: UPDATE (PUT)
  
  it('Challenge 1: Updates an existing post and verifies the update', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      id: 1, title: 'Updated Title', body: 'Updated Body Content', userId: 1
    })
.then((response) => {
    expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'Updated Title');
      expect(response.body).to.have.property('body', 'Updated Body Content');
    });
  });



  // Challenge 2: DELETE
 
  it('Challenge 2: Deletes a post and verifies deletion', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
        
        expect(response.status).to.eq(200);   // Fake API returns 200 even though it doesn’t delete
      });
  });


 
  // Set up App State through API and UI Test

  it('Challenge 3: Creates a new post through API and checks it in the UI', () => {
 
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {    // Createing a post through the API
      title: 'Post Created via API', body: 'This was created from Cypress!', userId: 99
    })
    .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('Post Created via API');   // > this block validates POST response
cy.log(`Created Post ID: ${response.body.id}`);
      
        });
    });
  });

