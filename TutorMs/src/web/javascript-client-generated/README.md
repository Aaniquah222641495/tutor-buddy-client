# student_tutor_booking_management_system

StudentTutorBookingManagementSystem - JavaScript client for student_tutor_booking_management_system
This is a system allowing students and tutors to book in-person sessions at designated venues on campus.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install student_tutor_booking_management_system --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var StudentTutorBookingManagementSystem = require('student_tutor_booking_management_system');

var api = new StudentTutorBookingManagementSystem.AdminApi()
var email = "email_example"; // {String} email of the Admin
var password = "password_example"; // {String} password of the Admin

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.authenticateAdmin(email, password, callback);
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*StudentTutorBookingManagementSystem.AdminApi* | [**authenticateAdmin**](docs/AdminApi.md#authenticateAdmin) | **GET** /admin/authenticate/{email}/{password} | authenticate admin
*StudentTutorBookingManagementSystem.AdminApi* | [**createAdmin**](docs/AdminApi.md#createAdmin) | **POST** /admin | Create a new admin
*StudentTutorBookingManagementSystem.AdminApi* | [**createUser**](docs/AdminApi.md#createUser) | **POST** /users | Create a new user
*StudentTutorBookingManagementSystem.AdminApi* | [**deleteAdmin**](docs/AdminApi.md#deleteAdmin) | **DELETE** /admin/{adminId} | Delete admin
*StudentTutorBookingManagementSystem.AdminApi* | [**deleteUser**](docs/AdminApi.md#deleteUser) | **DELETE** /users/{userId} | Delete user
*StudentTutorBookingManagementSystem.AdminApi* | [**getAdminById**](docs/AdminApi.md#getAdminById) | **GET** /admin/{adminId} | Get user by user ID
*StudentTutorBookingManagementSystem.AdminApi* | [**getAllAdmins**](docs/AdminApi.md#getAllAdmins) | **GET** /admin | Get all admin
*StudentTutorBookingManagementSystem.AdminApi* | [**getAllUsers**](docs/AdminApi.md#getAllUsers) | **GET** /users | Get all users
*StudentTutorBookingManagementSystem.AdminApi* | [**getUserById**](docs/AdminApi.md#getUserById) | **GET** /users/{userId} | Get user by user ID
*StudentTutorBookingManagementSystem.AdminApi* | [**updateAdmin**](docs/AdminApi.md#updateAdmin) | **PUT** /admin/{adminId} | Update an existing admin
*StudentTutorBookingManagementSystem.AdminApi* | [**updateUser**](docs/AdminApi.md#updateUser) | **PUT** /users/{userId} | Update an existing user
*StudentTutorBookingManagementSystem.BookingApi* | [**createBooking**](docs/BookingApi.md#createBooking) | **POST** /booking | Create a new booking
*StudentTutorBookingManagementSystem.BookingApi* | [**deleteBooking**](docs/BookingApi.md#deleteBooking) | **DELETE** /booking/{bookingId} | Delete Booking by ID
*StudentTutorBookingManagementSystem.BookingApi* | [**getAllBookings**](docs/BookingApi.md#getAllBookings) | **GET** /booking | Get all bookings
*StudentTutorBookingManagementSystem.BookingApi* | [**getAllBookingsByLocation**](docs/BookingApi.md#getAllBookingsByLocation) | **GET** /booking/location/{locationId} | Get all bookings for a particular location
*StudentTutorBookingManagementSystem.BookingApi* | [**getAllBookingsByStudent**](docs/BookingApi.md#getAllBookingsByStudent) | **GET** /booking/student/{studentId} | Get all bookings for a particular student
*StudentTutorBookingManagementSystem.BookingApi* | [**getAllBookingsBySubject**](docs/BookingApi.md#getAllBookingsBySubject) | **GET** /booking/subject/{subjectId} | Get all bookings for a particular subject
*StudentTutorBookingManagementSystem.BookingApi* | [**getAllBookingsByTutor**](docs/BookingApi.md#getAllBookingsByTutor) | **GET** /booking/tutor/{tutorId} | Get all bookings for a particular tutor
*StudentTutorBookingManagementSystem.BookingApi* | [**getBookingById**](docs/BookingApi.md#getBookingById) | **GET** /booking/{bookingId} | Get booking by ID
*StudentTutorBookingManagementSystem.BookingApi* | [**updateBooking**](docs/BookingApi.md#updateBooking) | **PUT** /booking/{bookingId} | Update a new booking
*StudentTutorBookingManagementSystem.LocationApi* | [**addLocation**](docs/LocationApi.md#addLocation) | **POST** /location | Add a new venue
*StudentTutorBookingManagementSystem.LocationApi* | [**deleteLocation**](docs/LocationApi.md#deleteLocation) | **DELETE** /location/{locationId} | Delete location
*StudentTutorBookingManagementSystem.LocationApi* | [**getAllLocations**](docs/LocationApi.md#getAllLocations) | **GET** /location | Get all location
*StudentTutorBookingManagementSystem.LocationApi* | [**getLocation**](docs/LocationApi.md#getLocation) | **GET** /location/{locationId} | Get a venue by id
*StudentTutorBookingManagementSystem.LocationApi* | [**updateLocation**](docs/LocationApi.md#updateLocation) | **PUT** /location/{locationId} | Update an existing location
*StudentTutorBookingManagementSystem.ReviewApi* | [**addReview**](docs/ReviewApi.md#addReview) | **POST** /review | Add review
*StudentTutorBookingManagementSystem.ReviewApi* | [**deleteReview**](docs/ReviewApi.md#deleteReview) | **DELETE** /review/{reviewId} | Delete existing review
*StudentTutorBookingManagementSystem.ReviewApi* | [**getAllReviews**](docs/ReviewApi.md#getAllReviews) | **GET** /review | Get all reviews
*StudentTutorBookingManagementSystem.ReviewApi* | [**getAllReviewsByStudent**](docs/ReviewApi.md#getAllReviewsByStudent) | **GET** /review/student/{studentId} | Get all reviews for a particular student
*StudentTutorBookingManagementSystem.ReviewApi* | [**getAllReviewsByTutor**](docs/ReviewApi.md#getAllReviewsByTutor) | **GET** /review/tutor/{tutorId} | Get all reviews for a particular tutor
*StudentTutorBookingManagementSystem.ReviewApi* | [**getReview**](docs/ReviewApi.md#getReview) | **GET** /review/{reviewId} | Get review by Id
*StudentTutorBookingManagementSystem.ReviewApi* | [**updateReview**](docs/ReviewApi.md#updateReview) | **PUT** /review/{reviewId} | Update existing review
*StudentTutorBookingManagementSystem.StudentApi* | [**addStudent**](docs/StudentApi.md#addStudent) | **POST** /student | Add a new student
*StudentTutorBookingManagementSystem.StudentApi* | [**authenticateStudent**](docs/StudentApi.md#authenticateStudent) | **GET** /student/authenticate/{email}/{password} | authenticate student
*StudentTutorBookingManagementSystem.StudentApi* | [**deleteStudent**](docs/StudentApi.md#deleteStudent) | **DELETE** /student/{studentId} | Delete student
*StudentTutorBookingManagementSystem.StudentApi* | [**getAllStudents**](docs/StudentApi.md#getAllStudents) | **GET** /student | Get all student
*StudentTutorBookingManagementSystem.StudentApi* | [**getStudentById**](docs/StudentApi.md#getStudentById) | **GET** /student/{studentId} | Get student by ID
*StudentTutorBookingManagementSystem.StudentApi* | [**updateStudent**](docs/StudentApi.md#updateStudent) | **PUT** /student/{studentId} | Update an existing student
*StudentTutorBookingManagementSystem.SubjectApi* | [**addSubject**](docs/SubjectApi.md#addSubject) | **POST** /subject | Add a new subject
*StudentTutorBookingManagementSystem.SubjectApi* | [**deleteSubject**](docs/SubjectApi.md#deleteSubject) | **DELETE** /subject/{subjectId} | Delete subject
*StudentTutorBookingManagementSystem.SubjectApi* | [**getAllSubject**](docs/SubjectApi.md#getAllSubject) | **GET** /subject | Get all subject
*StudentTutorBookingManagementSystem.SubjectApi* | [**getSubjectById**](docs/SubjectApi.md#getSubjectById) | **GET** /subject/{subjectId} | Get subject by ID
*StudentTutorBookingManagementSystem.SubjectApi* | [**updateSubject**](docs/SubjectApi.md#updateSubject) | **PUT** /subject/{subjectId} | Update an existing subject
*StudentTutorBookingManagementSystem.TutorApi* | [**addTutor**](docs/TutorApi.md#addTutor) | **POST** /tutor | Add a new tutor
*StudentTutorBookingManagementSystem.TutorApi* | [**authenticateTutor**](docs/TutorApi.md#authenticateTutor) | **GET** /tutor/authenticate/{email}/{password} | authenticate tutor
*StudentTutorBookingManagementSystem.TutorApi* | [**deleteTutor**](docs/TutorApi.md#deleteTutor) | **DELETE** /tutor/{tutorId} | Delete tutor
*StudentTutorBookingManagementSystem.TutorApi* | [**getAllTutors**](docs/TutorApi.md#getAllTutors) | **GET** /tutor | Get all tutors
*StudentTutorBookingManagementSystem.TutorApi* | [**getTutorById**](docs/TutorApi.md#getTutorById) | **GET** /tutor/{tutorId} | Get tutor by ID
*StudentTutorBookingManagementSystem.TutorApi* | [**updateTutor**](docs/TutorApi.md#updateTutor) | **PUT** /tutor/{tutorId} | Update an existing tutor

## Documentation for Models

 - [StudentTutorBookingManagementSystem.AdminDTO](docs/AdminDTO.md)
 - [StudentTutorBookingManagementSystem.BookingDTO](docs/BookingDTO.md)
 - [StudentTutorBookingManagementSystem.LocationDTO](docs/LocationDTO.md)
 - [StudentTutorBookingManagementSystem.ReviewDTO](docs/ReviewDTO.md)
 - [StudentTutorBookingManagementSystem.StudentDTO](docs/StudentDTO.md)
 - [StudentTutorBookingManagementSystem.SubjectDTO](docs/SubjectDTO.md)
 - [StudentTutorBookingManagementSystem.TutorDTO](docs/TutorDTO.md)
 - [StudentTutorBookingManagementSystem.UserDTO](docs/UserDTO.md)

## Documentation for Authorization

 All endpoints do not require authorization.

