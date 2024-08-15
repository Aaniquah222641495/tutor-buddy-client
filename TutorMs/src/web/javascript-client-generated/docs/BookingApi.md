# StudentTutorBookingManagementSystem.BookingApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBooking**](BookingApi.md#createBooking) | **POST** /booking | Create a new booking
[**deleteBooking**](BookingApi.md#deleteBooking) | **DELETE** /booking/{bookingId} | Delete Booking by ID
[**getAllBookings**](BookingApi.md#getAllBookings) | **GET** /booking | Get all bookings
[**getAllBookingsByLocation**](BookingApi.md#getAllBookingsByLocation) | **GET** /booking/location/{locationId} | Get all bookings for a particular location
[**getAllBookingsByStudent**](BookingApi.md#getAllBookingsByStudent) | **GET** /booking/student/{studentId} | Get all bookings for a particular student
[**getAllBookingsBySubject**](BookingApi.md#getAllBookingsBySubject) | **GET** /booking/subject/{subjectId} | Get all bookings for a particular subject
[**getAllBookingsByTutor**](BookingApi.md#getAllBookingsByTutor) | **GET** /booking/tutor/{tutorId} | Get all bookings for a particular tutor
[**getBookingById**](BookingApi.md#getBookingById) | **GET** /booking/{bookingId} | Get booking by ID
[**updateBooking**](BookingApi.md#updateBooking) | **PUT** /booking/{bookingId} | Update a new booking

<a name="createBooking"></a>
# **createBooking**
> BookingDTO createBooking(body)

Create a new booking

This can only be done by the student.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let body = new StudentTutorBookingManagementSystem.BookingDTO(); // BookingDTO | BookingDTO object that needs to be added to the system

apiInstance.createBooking(body, (error, data, response) => {
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
 **body** | [**BookingDTO**](BookingDTO.md)| BookingDTO object that needs to be added to the system | 

### Return type

[**BookingDTO**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBooking"></a>
# **deleteBooking**
> deleteBooking(bookingId)

Delete Booking by ID

Deletes a booking

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let bookingId = 789; // Number | ID of booking to return

apiInstance.deleteBooking(bookingId, (error, data, response) => {
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
 **bookingId** | **Number**| ID of booking to return | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllBookings"></a>
# **getAllBookings**
> [BookingDTO] getAllBookings()

Get all bookings

Returns all bookings in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
apiInstance.getAllBookings((error, data, response) => {
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

[**[BookingDTO]**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllBookingsByLocation"></a>
# **getAllBookingsByLocation**
> [BookingDTO] getAllBookingsByLocation(locationId)

Get all bookings for a particular location

Returns all bookings for a location in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let locationId = 789; // Number | Id of the Location

apiInstance.getAllBookingsByLocation(locationId, (error, data, response) => {
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
 **locationId** | **Number**| Id of the Location | 

### Return type

[**[BookingDTO]**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllBookingsByStudent"></a>
# **getAllBookingsByStudent**
> [BookingDTO] getAllBookingsByStudent(studentId)

Get all bookings for a particular student

Returns all bookings for a student in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let studentId = 789; // Number | Id of the student

apiInstance.getAllBookingsByStudent(studentId, (error, data, response) => {
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

[**[BookingDTO]**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllBookingsBySubject"></a>
# **getAllBookingsBySubject**
> [BookingDTO] getAllBookingsBySubject(subjectId)

Get all bookings for a particular subject

Returns all bookings for a subject in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let subjectId = 789; // Number | Id of the subject

apiInstance.getAllBookingsBySubject(subjectId, (error, data, response) => {
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
 **subjectId** | **Number**| Id of the subject | 

### Return type

[**[BookingDTO]**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllBookingsByTutor"></a>
# **getAllBookingsByTutor**
> [BookingDTO] getAllBookingsByTutor(tutorId)

Get all bookings for a particular tutor

Returns all bookings for a tutor in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let tutorId = 789; // Number | Id of the tutor

apiInstance.getAllBookingsByTutor(tutorId, (error, data, response) => {
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

[**[BookingDTO]**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBookingById"></a>
# **getBookingById**
> BookingDTO getBookingById(bookingId)

Get booking by ID

Returns a single booking

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let bookingId = 789; // Number | ID of booking to return

apiInstance.getBookingById(bookingId, (error, data, response) => {
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
 **bookingId** | **Number**| ID of booking to return | 

### Return type

[**BookingDTO**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBooking"></a>
# **updateBooking**
> BookingDTO updateBooking(body, bookingId)

Update a new booking

This can only be done by the student.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.BookingApi();
let body = new StudentTutorBookingManagementSystem.BookingDTO(); // BookingDTO | BookingDTO object that needs to be updated on the system
let bookingId = 789; // Number | ID of booking to return

apiInstance.updateBooking(body, bookingId, (error, data, response) => {
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
 **body** | [**BookingDTO**](BookingDTO.md)| BookingDTO object that needs to be updated on the system | 
 **bookingId** | **Number**| ID of booking to return | 

### Return type

[**BookingDTO**](BookingDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

