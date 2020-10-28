# Snack Overflow

## About 

## User Stories

## Languages Written In

## Included

### User DB Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Snack DB Model

 Column Name | Data Type | Notes |

### Join Table Model

 Column Name | Data Type | Notes |

### Default User Routes

| Method | Path | Location | Purpose |

### Default Auth Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile |

### Wire Frames

### Code Captures

### Contributor Githubs

### About Us

We are three budding fullstack developers attending General Assembly's Software Engineering Immersive Remote class. 