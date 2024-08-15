# StudentTutorBookingManagementSystem.TutorApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTutor**](TutorApi.md#addTutor) | **POST** /tutor | Add a new tutor
[**authenticateTutor**](TutorApi.md#authenticateTutor) | **GET** /tutor/authenticate/{email}/{password} | authenticate tutor
[**deleteTutor**](TutorApi.md#deleteTutor) | **DELETE** /tutor/{tutorId} | Delete tutor
[**getAllTutors**](TutorApi.md#getAllTutors) | **GET** /tutor | Get all tutors
[**getTutorById**](TutorApi.md#getTutorById) | **GET** /tutor/{tutorId} | Get tutor by ID
[**updateTutor**](TutorApi.md#updateTutor) | **PUT** /tutor/{tutorId} | Update an existing tutor

<a name="addTutor"></a>
# **addTutor**
> TutorDTO addTutor(body)

Add a new tutor

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.TutorApi();
let body = new StudentTutorBookingManagementSystem.TutorDTO(); // TutorDTO | Tutor object that needs to be added to the system

apiInstance.addTutor(body, (error, data, response) => {
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
 **body** | [**TutorDTO**](TutorDTO.md)| Tutor object that needs to be added to the system | 

### Return type

[**TutorDTO**](TutorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authenticateTutor"></a>
# **authenticateTutor**
> TutorDTO authenticateTutor(email, password)

authenticate tutor

Returns a single tutor

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.TutorApi();
let email = "email_example"; // String | email of the Tutor
let password = "password_example"; // String | password of the Tutor

apiInstance.authenticateTutor(email, password, (error, data, response) => {
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
 **email** | **String**| email of the Tutor | 
 **password** | **String**| password of the Tutor | 

### Return type

[**TutorDTO**](TutorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTutor"></a>
# **deleteTutor**
> deleteTutor(tutorId)

Delete tutor

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.TutorApi();
let tutorId = 789; // Number | ID of tutor that needs to be deleted

apiInstance.deleteTutor(tutorId, (error, data, response) => {
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
 **tutorId** | **Number**| ID of tutor that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllTutors"></a>
# **getAllTutors**
> [TutorDTO] getAllTutors()

Get all tutors

Returns all tutors in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.TutorApi();
apiInstance.getAllTutors((error, data, response) => {
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

[**[TutorDTO]**](TutorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTutorById"></a>
# **getTutorById**
> TutorDTO getTutorById(tutorId)

Get tutor by ID

Returns a single tutor

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.TutorApi();
let tutorId = 789; // Number | ID of tutor to return

apiInstance.getTutorById(tutorId, (error, data, response) => {
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
 **tutorId** | **Number**| ID of tutor to return | 

### Return type

[**TutorDTO**](TutorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTutor"></a>
# **updateTutor**
> TutorDTO updateTutor(body, tutorId)

Update an existing tutor

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.TutorApi();
let body = new StudentTutorBookingManagementSystem.TutorDTO(); // TutorDTO | Updated tutor object
let tutorId = 789; // Number | ID of tutor that needs to be updated

apiInstance.updateTutor(body, tutorId, (error, data, response) => {
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
 **body** | [**TutorDTO**](TutorDTO.md)| Updated tutor object | 
 **tutorId** | **Number**| ID of tutor that needs to be updated | 

### Return type

[**TutorDTO**](TutorDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

