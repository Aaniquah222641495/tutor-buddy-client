# StudentTutorBookingManagementSystem.SubjectApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubject**](SubjectApi.md#addSubject) | **POST** /subject | Add a new subject
[**deleteSubject**](SubjectApi.md#deleteSubject) | **DELETE** /subject/{subjectId} | Delete subject
[**getAllSubject**](SubjectApi.md#getAllSubject) | **GET** /subject | Get all subject
[**getSubjectById**](SubjectApi.md#getSubjectById) | **GET** /subject/{subjectId} | Get subject by ID
[**updateSubject**](SubjectApi.md#updateSubject) | **PUT** /subject/{subjectId} | Update an existing subject

<a name="addSubject"></a>
# **addSubject**
> SubjectDTO addSubject(body)

Add a new subject

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.SubjectApi();
let body = new StudentTutorBookingManagementSystem.SubjectDTO(); // SubjectDTO | SubjectDTO object that needs to be added to the system

apiInstance.addSubject(body, (error, data, response) => {
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
 **body** | [**SubjectDTO**](SubjectDTO.md)| SubjectDTO object that needs to be added to the system | 

### Return type

[**SubjectDTO**](SubjectDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubject"></a>
# **deleteSubject**
> deleteSubject(subjectId)

Delete subject

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.SubjectApi();
let subjectId = 789; // Number | ID of subject that needs to be deleted

apiInstance.deleteSubject(subjectId, (error, data, response) => {
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
 **subjectId** | **Number**| ID of subject that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllSubject"></a>
# **getAllSubject**
> [SubjectDTO] getAllSubject()

Get all subject

Returns all subjects in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.SubjectApi();
apiInstance.getAllSubject((error, data, response) => {
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

[**[SubjectDTO]**](SubjectDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubjectById"></a>
# **getSubjectById**
> SubjectDTO getSubjectById(subjectId)

Get subject by ID

Returns a single subject

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.SubjectApi();
let subjectId = 789; // Number | ID of subject to return

apiInstance.getSubjectById(subjectId, (error, data, response) => {
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
 **subjectId** | **Number**| ID of subject to return | 

### Return type

[**SubjectDTO**](SubjectDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSubject"></a>
# **updateSubject**
> SubjectDTO updateSubject(body, subjectId)

Update an existing subject

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.SubjectApi();
let body = new StudentTutorBookingManagementSystem.SubjectDTO(); // SubjectDTO | Updated subject object
let subjectId = 789; // Number | ID of subject that needs to be updated

apiInstance.updateSubject(body, subjectId, (error, data, response) => {
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
 **body** | [**SubjectDTO**](SubjectDTO.md)| Updated subject object | 
 **subjectId** | **Number**| ID of subject that needs to be updated | 

### Return type

[**SubjectDTO**](SubjectDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

