# Serverless Stack Notes App

A reactjs based web frontend uses APIs defined in [serverless-stack-notes-api](https://github.com/uditnarayan/serverless-stack-notes-api) project.

The application is available at [https://scratch-app-yudee.netlify.app](https://scratch-app-yudee.netlify.app).

## Features

*  Uses AWS Cognito user pool and identity pool for user authentication.
*  AWS IAM protected access to S3 for file uploads.
*  Stripe integration for simulating the payments.
*  Uses AWS lambda based APIs as backend exposed behind AWS API Gateway.
*  Uses AWS DynamoDB as storage in APIs.
*  Netlify for hosting web frontend.

## References

This project is a learning excercise to understand web development using serverless stack. The serverless learning course is available at [https://serverless-stack.com/#guide](https://serverless-stack.com/#guide).
