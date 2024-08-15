# StudentTutorBookingManagementSystem.StudentApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStudent**](StudentApi.md#addStudent) | **POST** /student | Add a new student
[**authenticateStudent**](StudentApi.md#authenticateStudent) | **GET** /student/authenticate/{email}/{password} | authenticate student
[**deleteStudent**](StudentApi.md#deleteStudent) | **DELETE** /student/{studentId} | Delete student
[**getAllStudents**](StudentApi.md#getAllStudents) | **GET** /student | Get all student
[**getStudentById**](StudentApi.md#getStudentById) | **GET** /student/{studentId} | Get student by ID
[**updateStudent**](StudentApi.md#updateStudent) | **PUT** /student/{studentId} | Update an existing student

<a name="addStudent"></a>
# **addStudent**
> StudentDTO addStudent(body)

Add a new student

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.StudentApi();
let body = new StudentTutorBookingManagementSystem.StudentDTO(); // StudentDTO | StudentDTO object that needs to be added to the system

apiInstance.addStudent(body, (error, data, response) => {
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
 **body** | [**StudentDTO**](StudentDTO.md)| StudentDTO object that needs to be added to the system | 

### Return type

[**StudentDTO**](StudentDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authenticateStudent"></a>
# **authenticateStudent**
> StudentDTO authenticateStudent(email, password)

authenticate student

Returns a single student

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.StudentApi();
let email = "email_example"; // String | email of the Student
let password = "password_example"; // String | password of the Student

apiInstance.authenticateStudent(email, password, (error, data, response) => {
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
 **email** | **String**| email of the Student | 
 **password** | **String**| password of the Student | 

### Return type

[**StudentDTO**](StudentDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteStudent"></a>
# **deleteStudent**
> deleteStudent(studentId)

Delete student

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.StudentApi();
let studentId = 789; // Number | ID of student that needs to be deleted

apiInstance.deleteStudent(studentId, (error, data, response) => {
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
 **studentId** | **Number**| ID of student that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllStudents"></a>
# **getAllStudents**
> [StudentDTO] getAllStudents()

Get all student

Returns all student in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.StudentApi();
apiInstance.getAllStudents((error, data, response) => {
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

[**[StudentDTO]**](StudentDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStudentById"></a>
# **getStudentById**
> StudentDTO getStudentById(studentId)

Get student by ID

Returns a single student

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.StudentApi();
let studentId = 789; // Number | ID of student to return

apiInstance.getStudentById(studentId, (error, data, response) => {
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
 **studentId** | **Number**| ID of student to return | 

### Return type

[**StudentDTO**](StudentDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateStudent"></a>
# **updateStudent**
> StudentDTO updateStudent(body, studentId)

Update an existing student

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.StudentApi();
let body = new StudentTutorBookingManagementSystem.StudentDTO(); // StudentDTO | Updated student object
let studentId = 789; // Number | ID of student that needs to be updated

apiInstance.updateStudent(body, studentId, (error, data, response) => {
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
 **body** | [**StudentDTO**](StudentDTO.md)| Updated student object | 
 **studentId** | **Number**| ID of student that needs to be updated | 

### Return type

[**StudentDTO**](StudentDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

