# StudentTutorBookingManagementSystem.ReviewApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReview**](ReviewApi.md#addReview) | **POST** /review | Add review
[**deleteReview**](ReviewApi.md#deleteReview) | **DELETE** /review/{reviewId} | Delete existing review
[**getAllReviews**](ReviewApi.md#getAllReviews) | **GET** /review | Get all reviews
[**getAllReviewsByStudent**](ReviewApi.md#getAllReviewsByStudent) | **GET** /review/student/{studentId} | Get all reviews for a particular student
[**getAllReviewsByTutor**](ReviewApi.md#getAllReviewsByTutor) | **GET** /review/tutor/{tutorId} | Get all reviews for a particular tutor
[**getReview**](ReviewApi.md#getReview) | **GET** /review/{reviewId} | Get review by Id
[**updateReview**](ReviewApi.md#updateReview) | **PUT** /review/{reviewId} | Update existing review

<a name="addReview"></a>
# **addReview**
> ReviewDTO addReview(body)

Add review

This can only be done by the student.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
let body = new StudentTutorBookingManagementSystem.ReviewDTO(); // ReviewDTO | ReviewDTO object that needs to be added to the system

apiInstance.addReview(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReviewDTO**](ReviewDTO.md)| ReviewDTO object that needs to be added to the system | 

### Return type

[**ReviewDTO**](ReviewDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReview"></a>
# **deleteReview**
> deleteReview(reviewId)

Delete existing review

deletes based on Id provided

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
let reviewId = 789; // Number | id of review to delete

apiInstance.deleteReview(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| id of review to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllReviews"></a>
# **getAllReviews**
> [ReviewDTO] getAllReviews()

Get all reviews

Returns all admins in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
apiInstance.getAllReviews((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ReviewDTO]**](ReviewDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllReviewsByStudent"></a>
# **getAllReviewsByStudent**
> [ReviewDTO] getAllReviewsByStudent(studentId)

Get all reviews for a particular student

Returns all reviews for a student in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
let studentId = 789; // Number | Id of the student

apiInstance.getAllReviewsByStudent(studentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **studentId** | **Number**| Id of the student | 

### Return type

[**[ReviewDTO]**](ReviewDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllReviewsByTutor"></a>
# **getAllReviewsByTutor**
> [ReviewDTO] getAllReviewsByTutor(tutorId)

Get all reviews for a particular tutor

Returns all reviews for a tutor in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
let tutorId = 789; // Number | Id of the tutor

apiInstance.getAllReviewsByTutor(tutorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tutorId** | **Number**| Id of the tutor | 

### Return type

[**[ReviewDTO]**](ReviewDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReview"></a>
# **getReview**
> ReviewDTO getReview(reviewId)

Get review by Id

Fetches data about a particular review

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
let reviewId = 789; // Number | Id of review to fetch

apiInstance.getReview(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| Id of review to fetch | 

### Return type

[**ReviewDTO**](ReviewDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReview"></a>
# **updateReview**
> ReviewDTO updateReview(body, reviewId)

Update existing review

Updates based on ID provided in path

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.ReviewApi();
let body = new StudentTutorBookingManagementSystem.ReviewDTO(); // ReviewDTO | 
let reviewId = 789; // Number | ID of review to update

apiInstance.updateReview(body, reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReviewDTO**](ReviewDTO.md)|  | 
 **reviewId** | **Number**| ID of review to update | 

### Return type

[**ReviewDTO**](ReviewDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

