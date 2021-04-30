const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-sst-uploads",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://zqpu9o0l6k.execute-api.ap-south-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_FXZ9ljjMo",
    APP_CLIENT_ID: "35s6ncrs102r63e54b6t6aejkt",
    IDENTITY_POOL_ID: "ap-south-1:ce93f07d-9f1e-45fa-ab22-a3e32115bbf6",
  },
};

export default config;