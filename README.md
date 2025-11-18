# WorkingWithAPI

This challenge contains three Cypress tests that practice making API requests and using those requests to support UI and backend testing.

The first challenge uses a GET request to an API and checks whether or not the response returns the correct status code and expected properties.

The second challenge uses a POST request to create new data through an API. The test checks that the request is successful and that the response body contains the data that was created.

The third challenge creates an application state through an API request and then verifies the results. A new post is then created through a POST request. After that, the test checks the data that's returned in order to confirm that the post was created successfully. Because JSONPlaceholder does not display new posts in an actual UI, the verification is done through the API.

These tests were created to show how Cypress can use API requests to verify backend behavior before running UI tests. These challenges helped build skills in making API requests, checking and validating responses, and understanding how API testing supports automated testing as a whole.
