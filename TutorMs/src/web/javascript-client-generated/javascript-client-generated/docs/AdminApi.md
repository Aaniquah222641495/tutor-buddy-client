# StudentTutorBookingManagementSystem.AdminApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateAdmin**](AdminApi.md#authenticateAdmin) | **GET** /admin/authenticate/{email}/{password} | authenticate admin
[**createAdmin**](AdminApi.md#createAdmin) | **POST** /admin | Create a new admin
[**createUser**](AdminApi.md#createUser) | **POST** /users | Create a new user
[**deleteAdmin**](AdminApi.md#deleteAdmin) | **DELETE** /admin/{adminId} | Delete admin
[**deleteUser**](AdminApi.md#deleteUser) | **DELETE** /users/{userId} | Delete user
[**getAdminById**](AdminApi.md#getAdminById) | **GET** /admin/{adminId} | Get user by user ID
[**getAllAdmins**](AdminApi.md#getAllAdmins) | **GET** /admin | Get all admin
[**getAllUsers**](AdminApi.md#getAllUsers) | **GET** /users | Get all users
[**getUserById**](AdminApi.md#getUserById) | **GET** /users/{userId} | Get user by user ID
[**updateAdmin**](AdminApi.md#updateAdmin) | **PUT** /admin/{adminId} | Update an existing admin
[**updateUser**](AdminApi.md#updateUser) | **PUT** /users/{userId} | Update an existing user

<a name="authenticateAdmin"></a>
# **authenticateAdmin**
> AdminDTO authenticateAdmin(email, password)

authenticate admin

Returns a single admin

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let email = "email_example"; // String | email of the Admin
let password = "password_example"; // String | password of the Admin

apiInstance.authenticateAdmin(email, password, (error, data, response) => {
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
 **email** | **String**| email of the Admin | 
 **password** | **String**| password of the Admin | 

### Return type

[**AdminDTO**](AdminDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createAdmin"></a>
# **createAdmin**
> AdminDTO createAdmin(body)

Create a new admin

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let body = new StudentTutorBookingManagementSystem.AdminDTO(); // AdminDTO | AdminDTO object that needs to be added to the system

apiInstance.createAdmin(body, (error, data, response) => {
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
 **body** | [**AdminDTO**](AdminDTO.md)| AdminDTO object that needs to be added to the system | 

### Return type

[**AdminDTO**](AdminDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> UserDTO createUser(body)

Create a new user

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let body = new StudentTutorBookingManagementSystem.UserDTO(); // UserDTO | UserDTO object that needs to be added to the system

apiInstance.createUser(body, (error, data, response) => {
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
 **body** | [**UserDTO**](UserDTO.md)| UserDTO object that needs to be added to the system | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAdmin"></a>
# **deleteAdmin**
> deleteAdmin(adminId)

Delete admin

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let adminId = 789; // Number | ID of user that needs to be deleted

apiInstance.deleteAdmin(adminId, (error, data, response) => {
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
 **adminId** | **Number**| ID of user that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete user

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let userId = 789; // Number | ID of user that needs to be deleted

apiInstance.deleteUser(userId, (error, data, response) => {
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
 **userId** | **Number**| ID of user that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAdminById"></a>
# **getAdminById**
> AdminDTO getAdminById(adminId)

Get user by user ID

Returns a single user

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let adminId = 789; // Number | ID of admin to return

apiInstance.getAdminById(adminId, (error, data, response) => {
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
 **adminId** | **Number**| ID of admin to return | 

### Return type

[**AdminDTO**](AdminDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllAdmins"></a>
# **getAllAdmins**
> [AdminDTO] getAllAdmins()

Get all admin

Returns all admins in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
apiInstance.getAllAdmins((error, data, response) => {
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

[**[AdminDTO]**](AdminDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllUsers"></a>
# **getAllUsers**
> [UserDTO] getAllUsers()

Get all users

Returns all users in the system

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
apiInstance.getAllUsers((error, data, response) => {
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

[**[UserDTO]**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserById"></a>
# **getUserById**
> UserDTO getUserById(userId)

Get user by user ID

Returns a single user

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let userId = 789; // Number | ID of user to return

apiInstance.getUserById(userId, (error, data, response) => {
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
 **userId** | **Number**| ID of user to return | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAdmin"></a>
# **updateAdmin**
> AdminDTO updateAdmin(body, adminId)

Update an existing admin

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let body = new StudentTutorBookingManagementSystem.AdminDTO(); // AdminDTO | Updated user object
let adminId = 789; // Number | ID of user that needs to be updated

apiInstance.updateAdmin(body, adminId, (error, data, response) => {
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
 **body** | [**AdminDTO**](AdminDTO.md)| Updated user object | 
 **adminId** | **Number**| ID of user that needs to be updated | 

### Return type

[**AdminDTO**](AdminDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> UserDTO updateUser(body, userId)

Update an existing user

This can only be done by the admin.

### Example
```javascript
import {StudentTutorBookingManagementSystem} from 'student_tutor_booking_management_system';

let apiInstance = new StudentTutorBookingManagementSystem.AdminApi();
let body = new StudentTutorBookingManagementSystem.UserDTO(); // UserDTO | Updated user object
let userId = 789; // Number | ID of user that needs to be updated

apiInstance.updateUser(body, userId, (error, data, response) => {
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
 **body** | [**UserDTO**](UserDTO.md)| Updated user object | 
 **userId** | **Number**| ID of user that needs to be updated | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

