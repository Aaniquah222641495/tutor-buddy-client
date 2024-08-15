# StudentTutorBookingManagementSystem.LocationApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLocation**](LocationApi.md#addLocation) | **POST** /location | Add a new venue
[**deleteLocation**](LocationApi.md#deleteLocation) | **DELETE** /location/{locationId} | Delete location
[**getAllLocations**](LocationApi.md#getAllLocations) | **GET** /location | Get all location
[**getLocation**](LocationApi.md#getLocation) | **GET** /location/{locationId} | Get a venue by id
[**updateLocation**](LocationApi.md#updateLocation) | **PUT** /location/{locationId} | Update an existing location

<a name="addLocation"></a>
# **addLocation**
> LocationDTO addLocation(body)

Add a new venue

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.LocationApi();
let body = new StudentTutorBookingManagementSystem.LocationDTO(); // LocationDTO | Location object that needs to be added to the system

apiInstance.addLocation(body, (error, data, response) => {
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
 **body** | [**LocationDTO**](LocationDTO.md)| Location object that needs to be added to the system | 

### Return type

[**LocationDTO**](LocationDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocation"></a>
# **deleteLocation**
> deleteLocation(locationId)

Delete location

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.LocationApi();
let locationId = 789; // Number | ID of Location that needs to be deleted

apiInstance.deleteLocation(locationId, (error, data, response) => {
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
 **locationId** | **Number**| ID of Location that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllLocations"></a>
# **getAllLocations**
> [LocationDTO] getAllLocations()

Get all location

Returns all locations in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.LocationApi();
apiInstance.getAllLocations((error, data, response) => {
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

[**[LocationDTO]**](LocationDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocation"></a>
# **getLocation**
> LocationDTO getLocation(locationId)

Get a venue by id

This retrieves a location by its id

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.LocationApi();
let locationId = 789; // Number | Id of location to retrieve

apiInstance.getLocation(locationId, (error, data, response) => {
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
 **locationId** | **Number**| Id of location to retrieve | 

### Return type

[**LocationDTO**](LocationDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLocation"></a>
# **updateLocation**
> LocationDTO updateLocation(body, locationId)

Update an existing location

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.LocationApi();
let body = new StudentTutorBookingManagementSystem.LocationDTO(); // LocationDTO | Updated location object
let locationId = 789; // Number | ID of location that needs to be updated

apiInstance.updateLocation(body, locationId, (error, data, response) => {
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
 **body** | [**LocationDTO**](LocationDTO.md)| Updated location object | 
 **locationId** | **Number**| ID of location that needs to be updated | 

### Return type

[**LocationDTO**](LocationDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

